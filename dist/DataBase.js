"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Connection {
    constructor() {
        this.dbUrl = 'mongodb://0.0.0.0:27017/firstproject';
    }
    dataBaseConnection() {
        mongoose_1.default.connect(this.dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
            console.log("MongoDB connection established sucessfully");
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
exports.Connection = Connection;
