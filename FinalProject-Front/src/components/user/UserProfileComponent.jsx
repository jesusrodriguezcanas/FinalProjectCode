import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { delPokemonTeam } from '../../core/services/usersFetch';
import { deletePokemonAction } from './UserAction';

const UserProfileComponent = () => {
  // const [userData, setUserData] = useState(null);

const navigate = useNavigate()
const dispatch = useDispatch()
const user = useSelector((state) => state.usersReducer.user);
console.log("User desde Redux:", user);






useEffect(() => {
 console.log('Nuevo estado de user:', user)
}, [user]);  // Solo se ejecutará cuando 'user' cambie

const goHome = () => {
  navigate('/login')
}

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
      dispatch(deletePokemonAction(idPokemon));  // Actualiza el estado con el Pokémon eliminado
    } catch (error) {
      console.error('No se pudo eliminar el Pokémon:', error);
    }
  } else {
    console.error('Token no encontrado o usuario no válido.');
  }
};



if (!user) {
  return <div>Cargando...</div>;
}

  return (
    <div>
      <div>
      <button onClick={goHome}>Log out</button>
      <button onClick={goPokedex}>Pokedex</button>
      </div>

      <div>
        <h2>Mis datos: </h2>
      </div>
      <div>
      <div>
              <span><strong>Nombre: </strong> {user.name}</span>
            </div>
            <div>
              <span><strong>Email: </strong> {user.email}</span>
            </div>
      </div>
      
      {user.pokemonsTeam && user.pokemonsTeam.length > 0 ? (
      <div>
        <h2>Mi equipo Pokemon:</h2>        
          {user.pokemonsTeam.map((pokemon) => (             
          <div key={pokemon._id}>   
            <p>Nombre: {pokemon.name}</p>
            <p>Tipo: {pokemon.tipo}</p>
            <p>Naturaleza: {pokemon.naturaleza}</p>
            <div>
              <button onClick={()=> deletePokemon(pokemon._id)}>Eliminar</button>
            </div>
          </div>
          ))}       
      </div>
      ) : (
        <p>¡Tu equipo no tiene ningún Pokemon!</p>
      )}
    </div>
  )
}

export default UserProfileComponent