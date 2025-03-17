const pokemonModel = require('../models/pokemonModel');


const addPokemon = async (req,res) => {
    try {
      const pokemonsData = req.body;
      await pokemonModel.create(pokemonsData);
      res.status(200).send("El pokemon se creó correctamente");
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

const getAllPokemons = async(req,res) => {
    try{
      const allPokemons = req.params.allPokemons;
      const pokemons = await pokemonModel.find()
      res.status(200).send(pokemons);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  }

  const getPokemonById = async (req,res) => {
    try {
        const idPokemon = req.params.idPokemon;
        const pokemon = await pokemonModel.findById(idPokemon);
        if (!pokemon) {
          return res.status(404).send("Pokemon no existe");
        }
        res.status(200).send(pokemon);
      } catch (error) {
        res.status(500).send({ status: "failed", error: error.message})
      }
    };



  module.exports = { getAllPokemons, getPokemonById, addPokemon}