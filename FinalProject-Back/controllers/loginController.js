const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken} = require('../utils/utils')

const signup = async (req,res) => {
    try {
        const { name, email, password} = req.body;
        const newUser = {
            name,
            email, 
            password: await bcrypt.hash(password, 10)
        };

        const createdUser =await usersModel.create(newUser);
        res.status(200).json({user: createdUser, message: 'Usuario creado correctamente'});
        } catch (error) {
            if(error.code === 11000) {
                return res
                .status(500)
                .send({ status: 'failed', error: 'El correo ya existe'});
            }
            res.status(500).json({ status: 'Failed', error: error.message})
        }
    };

    const login = async (req,res) => {
        try{
            const {email, password} = req.body;

            const user = await usersModel.findOne({email: email});
            if (!user) {
                return res.status(404).send("Email o contraseña no válidos")
            }

            const validatePassword = await bcrypt.compare(password, user.password)
            if (!validatePassword) {
                return res.status(404).send("Usuario o contraseña no válidos")
            }

            const payload = {
                _id: user._id,
                name: user.name
            };

            const token = generateToken(payload, false);
            const tokenRefresh = generateToken(payload, true);
            res.status(200).send({user, token, tokenRefresh});
        } catch (error) {
            res.status(500).send({ status: "failed", error: error.message});
        }
    }

    const tokenRefresh = (req, res) => {
        try {
            const payload = {
                _id: req.payload._id,
                name: req.payload.name,
            }
            const token = generateToken(payload, false);
            const tokenRefresh = generateToken(payload, true);
            res.status(200).send({user, token, tokenRefresh});
        } catch (error) {
            res.status(500).send({ status: "failed", error: error.message});
        }
    }
    
    module.exports = { signup, login, tokenRefresh };
