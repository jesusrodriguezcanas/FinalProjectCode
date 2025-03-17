// dejo pendiente si crear este router por si añado
//rol admin o solo usuarios normales
const express = require('express');
const {getUserById, editUser, addPokemonTeam, delPokemonTeam} = require('../controllers/usersController');
const { verifyToken } = require('../middlewares/auth');
const router = express.Router();

router.get("/:idUser", getUserById);
router.patch("/:idUser",verifyToken, editUser);
router.post("/:idUser/team", verifyToken, addPokemonTeam);
router.delete("/:idUser/team",verifyToken, delPokemonTeam);


module.exports = router;