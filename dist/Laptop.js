"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Schéma et modèle MongoDB pour les laptops
let laptopSchema = new mongoose_1.default.Schema({
    laptopName: { type: String, required: true },
    laptopPrice: { type: Number, required: true }
});
// Creation du collection
const Laptoop = mongoose_1.default.model('laptopsversion1', laptopSchema);
exports.default = Laptoop;
