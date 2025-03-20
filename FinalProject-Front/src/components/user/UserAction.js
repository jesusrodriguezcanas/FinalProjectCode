import { delPokemonTeam } from "../../core/services/usersFetch";

export const DELETE_POKEMON = 'DELETE_POKEMON';

  export const deletePokemonAction = (idPokemon) => ({
    type: DELETE_POKEMON,
    payload: idPokemon
  });


export const ADDTEAM_POKEMON = 'ADDTEAM_POKEMON';

export const addPokemonAction = (Pokemon) => ({
  type: ADDTEAM_POKEMON,
  payload: Pokemon
});


export const LOAD_PERFIL = 'LOAD_PERFIL';

export const loadPerfil = (user) => ({
    type: LOAD_PERFIL,
    payload: user
});

// edit perfil + LOADPERFIL
export const EDIT_PERFIL= 'EDIT_PERFIL';

export const editPerfilAction = (updatedUser) => ({
  type: EDIT_PERFIL,
  payload:updatedUser
});