"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const bodyParser = require("body-parser");
class Server {
    constructor(port) {
        this.port = port;
        this.app = express();
        this.app.use(bodyParser.json());
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log("Server started ...");
        });
    }
    getapp() {
        return this.app;
    }
}
exports.Server = Server;
