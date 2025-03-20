import { LOAD_PERFIL, EDIT_PERFIL, DELETE_POKEMON, ADDTEAM_POKEMON  } from "./UserAction"

//EDIT_PERFIL,ADDTEAM_POKEMON, DELETE_POKEMON
const initialState = {
    user: null,
    pokemons: [] 
};

const usersReducer = (state = initialState, action) => {
    if (action.type === LOAD_PERFIL) {
        return {
            ...state, 
            user: action.payload,
            pokemons: action.payload.pokemonsTeam || []
        };
    } else if (action.type === DELETE_POKEMON) {
        return {
            ...state,
            user: {
                ...state.user,
                pokemonsTeam: state.user.pokemonsTeam.filter(pokemon => pokemon._id !== action.payload)
            }
        };
    } else if (action.type === EDIT_PERFIL) {
        return {
            ...state,
            user: {...state.user, ...action.payload},
        };
    } else if (action.type === ADDTEAM_POKEMON) {
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload], // Agrega el nuevo Pokémon al final del array
        };
    } else {
        return state;
    }
};

export default usersReducer;