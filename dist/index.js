"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./Server");
const DataBase_1 = require("./DataBase");
const Laptop_1 = __importDefault(require("./Laptop"));
const server = new Server_1.Server(8000);
const connection = new DataBase_1.Connection();
server.startServer();
connection.dataBaseConnection();
// Routes pour l'API REST : 
//Method GET:
server.getapp().get('/laptops', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mesLaptops = yield Laptop_1.default.find().exec();
        response.json(mesLaptops);
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}));
//Method POST:
server.getapp().post('/laptop/add', (requeste, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { laptopName, laptopPrice } = requeste.body;
    if (!laptopName || !laptopPrice) {
        return response.status(500).json({ message: 'Laptop name et laptop price sont requis' });
    }
    const newLaptop = new Laptop_1.default({ laptopName, laptopPrice });
    try {
        const savedLaptop = yield newLaptop.save();
        response.status(201).json({ message: 'Laptop sauvegardé avec succès', laptop: savedLaptop });
    }
    catch (error) {
        response.status(400).json({ message: error.mesage });
        (err) => {
            response.status(500).json({ message: err.mesage });
        };
    }
}));
//Method GET BY ID:
server.getapp().get('/laptop/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const myLaptop = yield Laptop_1.default.findById(request.params.id);
        response.json(myLaptop);
    }
    catch (error) {
        response.status(500).json({ message: error.mesage });
    }
}));
//Method PUT:
server.getapp().put('/laptop/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedLaptop = yield Laptop_1.default.findByIdAndUpdate(request.params.id, request.body, { new: true });
        if (!updatedLaptop) {
            return response.status(404).json({ message: 'Laptop not founs' });
        }
        else {
            response.json(updatedLaptop);
        }
    }
    catch (error) {
        response.status(400).json({ message: error.message });
    }
}));
//Method DELETE:
server.getapp().delete('/laptop/delete/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedLaptop = yield Laptop_1.default.findByIdAndDelete(request.params.id);
        if (!deletedLaptop) {
            return response.status(404).json({ message: 'Laptop not found' });
        }
        else {
            response.status(204).send();
        }
    }
    catch (error) {
        response.status(500).json({ message: error.message });
    }
}));
