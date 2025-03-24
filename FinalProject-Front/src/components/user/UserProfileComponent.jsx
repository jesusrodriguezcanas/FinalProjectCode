import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { delPokemonTeam } from '../../core/services/usersFetch';
import { deletePokemonAction, editPerfilAction } from './UserAction';
import { editUserPerfil } from '../../core/services/usersFetch';
import { logout } from '../../utils/utils';

const UserProfileComponent = () => {

const navigate = useNavigate()
const dispatch = useDispatch()

const user = useSelector((state) => state.usersReducer.user);
const [editionUser, setEditionUser] = useState(false);
const [data, setData] = useState({
  name:user?.name,
  email: user?.email,
  phone: user?.phone,
  direccion: user?.direccion
});

useEffect(() => {
if (user) {
  setData({
    name: user.name,
    email: user.email,
    phone: user.phone,
    direccion: user.direccion
  })
}}, [user]);  // Solo se ejecutará cuando 'user' cambie


const goPokedex = () => {
  navigate('/pokedex')
}

const deletePokemon = async (idPokemon) => {
  const authToken = localStorage.getItem('token');  // Recuperas el token de localStorage
  console.log('Token recuperado:', authToken);  // Verifica si se obtiene correctamente

  if (user && user._id && authToken) {
    try {
      const updatedUser = await delPokemonTeam(user._id, idPokemon, authToken);  // Llamada al backend con el token
      console.log('Usuario actualizado:', updatedUser);  // Verifica que el backend devuelva el usuario actualizado
      dispatch(deletePokemonAction(idPokemon));
      dispatch(editPerfilAction(updatedUser)) 
      localStorage.setItem('user', JSON.stringify(updatedUser)) // Actualiza el estado con el Pokémon eliminado
    } catch (error) {
      console.error('No se pudo eliminar el Pokémon:', error);
    }
  } else {
    console.error('Token no encontrado o usuario no válido.');
  }
};

const inputChange = (e) => {
  const {name, value} = e.target
  setData({
    ...data,
    [name]:value,
  });
};

const saveChanges = async () => {
  const authToken = localStorage.getItem('token');
  const userId = user?._id;
 if (authToken && userId) {
  try {
    // Llama a la función editUserPerfil
    const updatedUser = await editUserPerfil(userId, data, authToken);

    if (updatedUser) {
      // Si todo sale bien, actualizamos el estado con el usuario actualizado
      dispatch(editPerfilAction(updatedUser));
      setEditionUser(false);  // Cierra el modo de edición
    }
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
  }
} else {
  setStatusMessage("No se ha encontrado el token de autenticación.");
}
};



if (!user) {
  return <div>Cargando...</div>;
}

  return (
    <div className='user-profile-container'>
      <div className='container-welcome-perfil'>
        <h2>¡Bienvenido/a de nuevo <span>{user.username}!</span></h2>
      </div>
      <hr />
      <div className='container-button-profile'>
      <button className='home-button-profile' onClick={() => logout(dispatch, navigate)}>Log out</button>
      <button className='pokedex-button-profile' onClick={goPokedex}>Pokedex</button>
      </div>
      <hr />
      <div className='user-profile-info'>
        <h2>Mis datos: </h2>
        {editionUser ? (
           <div>
           <div className='info-item'>
             <span><strong>Nombre: </strong></span>
             <input type="text" name="name" value={data.name} onChange={inputChange}
             />
           </div>
           <div className='info-item'>
             <span><strong>Email: </strong></span>
             <input type="email" name="email" value={data.email} onChange={inputChange}
             />
           </div>
           <div className='info-item'>
             <span><strong>Teléfono: </strong></span>
             <input type="text" name="phone" value={data.phone} onChange={inputChange}
             />
           </div>
           <div className='info-item'>
             <span><strong>Dirección: </strong></span>
             <input type="text" name="direccion" value={data.direccion} onChange={inputChange}
             />
           </div>
           <div className='container-edit-button'>
             <button className='home-button' onClick={saveChanges}>
               Guardar cambios
             </button>
             <button className='home-button' onClick={() => setEditionUser(false)}>
               Cancelar
             </button>
           </div>
         </div>
        ) : (
          <div>
            <div className='info-item'>
              <span><strong>Nombre: </strong> {user.name}</span>
            </div>
            <div className='info-item'>
              <span><strong>Nombre usuario: </strong> {user.username}</span>
            </div>
            <div className='info-item'>
              <span><strong>Email: </strong> {user.email}</span>
            </div>
            <div className='info-item'>
              <span><strong>Teléfono: </strong> {user.phone}</span>
            </div>
            <div className='info-item'>
              <span><strong>Dirección: </strong> {user.direccion}</span>
            </div>
            <div className='container-edit-button'>
              <button className='home-button' onClick={() => setEditionUser(true)}>Editar datos</button>
            </div>
          </div>
          
        )}
      </div>
      <hr />
      {user.pokemonsTeam && user.pokemonsTeam.length > 0 ? (
      <div className='pokemon-team-container'>
        <h2>Mi equipo Pokemon:</h2>    
        <div className='pokemon-team-list'>     
          {user.pokemonsTeam.map((pokemon) => (             
          <div key={pokemon._id} className='pokemon-team-card'>   
            <p className='pokemon-label'>Nombre: {pokemon.name}</p>
            <p className='pokemon-label'>Tipo: {pokemon.tipo}</p>
            <p className='pokemon-label'>Naturaleza: {pokemon.naturaleza}</p>
            <button className='home-button' onClick={()=> deletePokemon(pokemon._id)}>Eliminar</button>
            </div>
          ))}       
      </div>
      </div>
      ) : (
        <p>¡Tu equipo no tiene ningún Pokemon!</p>
      )}
    </div>
  )
}

export default UserProfileComponent