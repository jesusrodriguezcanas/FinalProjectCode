const { ObjectId} = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    name:{
        type: String,
        required: [true, "Nombre obligatorio"],
        maxLength: [30, "El nombre no puede tener más de 30 caracteres"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email obligatorio"],
        maxLength: [25, "El email no puede tener más de 25 caracteres"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Contraseña obligatoria"],
    },
    pokemonsTeam: {
        type:  [{
            name: { type: String },
            tipo: { type: String },
            naturaleza: { type: String },
            // Añadir otros atributos según el objeto del Pokémon
          }],
        default: [],
        ref: "User"
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

const userModel = mongoose.model("User", usersSchema, "user");
module.exports = userModel;