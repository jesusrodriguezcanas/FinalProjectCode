const usersModel = require('../models/usersModel');
const pokemonsModel = require('../models/pokemonModel');

const getUserById = async (req,res) => {
    try{
        const idUser = req.params.idUser;
        const user = await usersModel.findById(idUser)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send({ status: 'Failed', error: "Usuario no encontrado"})

    }
}

const editUser = async (req, res) => {
    try {
        const { idUser } = req.params; 
        const updateData = req.body; 
        // Actualizar el usuario con los nuevos datos y devolverlo
        const updatedUser = await usersModel.findByIdAndUpdate(idUser, updateData, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ error: 'Usuario no encontrado' });
        }
        res.status(200).send({ user: updatedUser });
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
        res.status(500).send({ error: 'Error en el servidor' });
    }
};


const addPokemonTeam = async (req,res) => {
    try {
      const {idUser} = req.params;
      const {idPokemon} = req.body
      
      const user = await usersModel.findById(idUser);
      const pokemon = await pokemonsModel.findById(idPokemon);
      if (user.pokemonsTeam.length >= 6) {
  return res.status(400).json({ status: "failed", error: "El equipo ya tiene 6 Pokémon" });
}

if (user.pokemonsTeam.some(p => p.name === pokemon.name)) {
  return res.status(400).json({ status: "failed", error: "El pokemon ya está en tu equipo" });
}

    user.pokemonsTeam.push({
      _id: pokemon._id,
      name: pokemon.name,
      tipo: pokemon.tipo,
      naturaleza: pokemon.naturaleza
    });
    await user.save();

      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };

  const delPokemonTeam = async (req,res) => {
    try {
        const {idUser} = req.params;
        const {idPokemon} = req.body
      
      const user = await usersModel.findById(idUser);
      const pokemon = await pokemonsModel.findById(idPokemon);
      if (!user.pokemonsTeam.some(p => p._id.toString() === pokemon._id.toString())) {
        return res.status(400).json({ status: "failed", error: "El pokemon no está en tu equipo" });
      }
  
      user.pokemonsTeam = user.pokemonsTeam.filter(p => p._id.toString() !== pokemon._id.toString());
      await user.save(); 

      res.status(200).send(user);
    } catch (error) {
      res.status(500).send({ status: 'Failed', error: error.message})
    }
  };


module.exports = {getUserById, editUser, addPokemonTeam, delPokemonTeam};