import { LOAD_POKEMONS,   } from "./PokemonAction"
import { DELETE_POKEMON } from "../user/UserAction";
//ADDTEAM_POKEMON
//DELETE_POKEMON


const initialState = {
    pokemons: [],
    //pokemonSelected: null
}

const pokemonReducer = (state = initialState, action) => {
    if (action.type === LOAD_POKEMONS) {
        return {
            ...state, 
            pokemons: action.payload
        };
    } else if (action.type === DELETE_POKEMON) {
        return {
            ...state,
            pokemons: state.pokemons.filter(pokemon => pokemon._id !== action.payload)
        };
    }
    else {
        return state;
    }
};

export default pokemonReducer