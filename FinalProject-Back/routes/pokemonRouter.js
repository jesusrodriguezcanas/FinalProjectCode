const express = require('express');
const {getAllPokemons, getPokemonById, addPokemon} = require('../controllers/pokemonController');
const router = express.Router();

router.get("/pokemon", getAllPokemons);
router.post("/pokemon", addPokemon)
router.get("/pokemon/:idPokemon", getPokemonById);



module.exports = router;