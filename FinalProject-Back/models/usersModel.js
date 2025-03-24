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
    username: {
        type: String,
        required: [true, "Nombre usuario obligatorio"],
        maxLength: [20, "El nombre no puede tener más de 30 caracteres"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email obligatorio"],
        maxLength: [25, "El email no puede tener más de 25 caracteres"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Teléfono obligatorio"],
        trim: true
    },
    direccion:{
        type: String,
        required: [true, "Dirección obligatoria"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Contraseña obligatoria"],
        trim: true
    },
    pokemonsTeam: {
        type:  [{
            name: { type: String },
            tipo: { type: String },
            naturaleza: { type: String },
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