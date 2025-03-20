
export const LOAD_POKEMONS = 'LOAD_POKEMONS'

//Creador de acción
export const loadPokemon = (pokemons) => {
    return {
        type: LOAD_POKEMONS,
        payload: pokemons
    }
}

export const SHOWMY_POKEMONS = 'SHOWMY_POKEMONS';

export const showMyPokemons = (pokemons) => ({
    type: SHOWMY_POKEMONS,
    payload: pokemons,
});


//showmy pokemos hace referencia al endpoint getbyid