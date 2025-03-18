
export const LOAD_POKEMONS = 'LOAD_POKEMONS'

//Creador de acción
export const loadPokemon = (pokemons) => {
    return {
        type: LOAD_POKEMONS,
        payload: pokemons
    }
}

export const DELETE_POKEMON = 'DELETE_POKEMON';

export const deletePokemonAction = (idPokemon) => ({
  type: DELETE_POKEMON,
  payload: idPokemon
});

