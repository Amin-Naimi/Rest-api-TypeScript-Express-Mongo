import mongoose from "mongoose";

// Schéma et modèle MongoDB pour les laptops

let laptopSchema = new mongoose.Schema({
    laptopName: {type: String, required: true},
    laptopPrice: {type: Number, required: true}
})

// Creation du collection
const Laptoop = mongoose.model('laptopsversion1', laptopSchema);

export default Laptoop;