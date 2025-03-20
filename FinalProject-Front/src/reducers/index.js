import { combineReducers } from "redux";
import pokemonReducer from "../components/pokemons/PokemonReducer";
import usersReducer from "../components/user/UserReducer";

const reducers = combineReducers({
pokemonReducer,
usersReducer
});

export default reducers;