const usersModel = require('../models/usersModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken} = require('../utils/utils')

const signup = async (req,res) => {
    try {
        const { name, email, password, username, phone, direccion} = req.body;
       
       const emailLower = email.toLowerCase();
       const checks = await usersModel.findOne({ $or: [{email: emailLower},
        {phone}
       ]});

       if (checks) {
         if (checks.email === emailLower) errorMessage = '¡Correo ya registrado!';
            else if (checks.phone === phone) errorMessage = '¡Teléfono ya registrado!';

            return res.status(400).json({ status: 'failed', error: errorMessage });
       }

        const newUser = {
            name,
            email: emailLower, 
            username,
            phone,
            direccion,
            password: await bcrypt.hash(password, 10)
        };

        const createdUser = await usersModel.create(newUser);

        const payload = {
            idUser: createdUser._id,
            username:createdUser.username
        }

        const token = generateToken(payload, false);
        const tokenRefresh = generateToken(payload, true);
        res.status(200).send({user: {
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            username: createdUser.username,
            phone: createdUser.phone,
            direccion: createdUser.direccion
        }, token, tokenRefresh});
        } catch (error) {
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
