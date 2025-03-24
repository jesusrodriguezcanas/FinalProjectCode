import React, { useEffect, useState} from 'react';
import { getPokemons } from '../../core/services/pokemonFetch';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from './PokemonAction';
import { addPokemonTeam, getUserById } from '../../core/services/usersFetch';
import { addPokemonAction } from '../user/UserAction';
import { loadPerfil } from '../user/UserAction';


const PokemonListComponent = () => {
  
  const { pokemons = [] } = useSelector((state) => state.pokemonReducer || {});
  const { user: userRedux } = useSelector((state) => state.userReducer || {});
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))  || {});
  const dispatch = useDispatch();
  
  const loadPokemonList = async () => {
    const pokemonListAux = await getPokemons();
    console.log(pokemonListAux); 
    dispatch(loadPokemon(pokemonListAux));
  };

const addPokemon = async (pokemon) => {
  const authToken = localStorage.getItem('token');  
  console.log('Token recuperado:', authToken); 

  if (user && user._id && authToken) {
    console.log('Número de Pokémon en el equipo:', user.pokemonsTeam.length); // Depurar longitud del equipo

    if(user.pokemonsTeam.length >= 6) {
      alert('¡Ya tienes 6 Pokemons en tu equipo! No puedes añadir más.');
      return;
    }

    const isInTeam = user?.pokemonsTeam?.some((teamPokemon) => teamPokemon._id === pokemon._id);
    if (isInTeam) {
      alert('Este Pokémon ya está en tu equipo');
      return; 
    }

    try {
      // Llamada al backend para añadir el Pokémon al equipo
      const response = await addPokemonTeam(user._id, pokemon._id, authToken);
      
      if (response) {
        console.log('Pokémon añadido exitosamente:', response);
        const updatedUser = await getUserById(user._id, authToken);
        localStorage.setItem('user', JSON.stringify(updatedUser))
        dispatch(loadPerfil(updatedUser)); 
        dispatch(addPokemonAction(pokemon)); 
        localStorage.setItem('user', JSON.stringify(updatedUser))
        setUser(updatedUser)
        console.log('actualizadp', updatedUser)
      }
    } catch (error) {
      console.error('No se pudo añadir el Pokémon:', error);
    }
  } else {
alert(response.error)  }
};

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    setUser(storedUser);  
  }
}, []);


  useEffect(() => {
    loadPokemonList();
  }, []);

  
  return (
    <div  className='container-list-pokedex'>
      <hr />
      <div className='container-tittle-pklist'>
      <h2 className='general-tittle'>Aquí podrás ver nuestra lista de Pokemons: </h2>
      </div>
      
     
      <div className='pokemon-list'>
      {Array.isArray(pokemons) && pokemons.length > 0 ? (
          pokemons.map((p, idx) => {
            // Verificar si el Pokémon ya está en el equipo
            const isInTeam = user?.pokemonsTeam?.some((teamPokemon) => teamPokemon._id === p._id);

            return (
              <div key={idx} className='pokemon-card'>
                <div className='pokemon-info'>
                  <span className='pokemon-label'>Nombre Pokémon: </span>
                  <span className='pokemon-value'>{p.name}</span>
                </div>
                <div className='pokemon-info'>
                  <span className='pokemon-label'>Tipo: </span>
                  <span className="pokemon-value">{p.tipo}</span>
                </div>
                <div className='pokemon-info'>
                  <span className='pokemon-label'>Naturaleza: </span>
                  <span className="pokemon-value">{p.naturaleza}</span>
                </div>
                {user && user._id &&(
                  <button
                    className={`home-button ${isInTeam ? 'in-team' : ''}`}
                    onClick={() => !isInTeam && addPokemon(p)}
                    disabled={isInTeam}
                  >
                    {isInTeam ? 'En el equipo' : 'Añadir al team'}
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <div>No hay pokemons disponibles</div>
        )}
      </div>
    </div>
  )
}

export default PokemonListComponent