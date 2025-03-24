

export const DELETE_POKEMON = 'DELETE_POKEMON';

  export const deletePokemonAction = (idPokemon) => ({
    type: DELETE_POKEMON,
    payload: idPokemon
  });


export const ADDTEAM_POKEMON = 'ADDTEAM_POKEMON';

export const addPokemonAction = (pokemon) => {
  return (dispatch, getState) => {
    const { user } = getState().usersReducer;
    if (user && user.pokemonsTeam && user.pokemonsTeam.some(p => p._id === pokemon._id)) {
      console.log('El Pokémon ya está en el equipo');
      return; // No añadir si ya está presente
    }
    dispatch({
      type: 'ADD_POKEMON',
      payload: pokemon,
    });
  };
};


export const LOAD_PERFIL = 'LOAD_PERFIL';

export const loadPerfil = (userProfile) => ({
    type: LOAD_PERFIL,
    payload: userProfile
});

// edit perfil + LOADPERFIL
export const EDIT_PERFIL= 'EDIT_PERFIL';

export const editPerfilAction = (updatedUser) => ({
  type: EDIT_PERFIL,
  payload:updatedUser
});