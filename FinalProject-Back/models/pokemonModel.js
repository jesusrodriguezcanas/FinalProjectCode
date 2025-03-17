const { ObjectId} = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonsSchema = new Schema({
    name:{
        type: String,
        required: [true, "Nombre obligatorio"],
        maxLength: [15, "El nombre no puede tener más de 30 caracteres"],
        trim: true
    },
    tipo: {
        type: String,
        required: [true, "Tipo obligatorio"],
        maxLength: [10, "El tipo no puede tener más de 10 caracteres"],
        trim: true
    },
    naturaleza: {
        type: String,
        required: [true, "Naturaleza obligatoria"],
        trim: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const pokemonModel = mongoose.model("Pokemon", pokemonsSchema, "pokemon");
module.exports = pokemonModel;