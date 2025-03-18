import React, { useEffect} from 'react';
import { getPokemons } from '../../core/services/pokemonFetch';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemon } from './PokemonAction';

const PokemonListComponent = () => {
  
  const { pokemons = [] } = useSelector((state) => state.pokemonReducer || {});
  const dispatch = useDispatch();

  const loadPokemonList = async () => {
    const pokemonListAux = await getPokemons();
    console.log(pokemonListAux); 
    dispatch(loadPokemon(pokemonListAux));
  };

  useEffect(() => {
    loadPokemonList();
  }, []);

  return (
    <div>
      <hr />
      <h2>Aquí podrás ver nuestra lista de Pokemons: </h2>
      <hr />
     
      <div className='pokemon-list'>
        {Array.isArray(pokemons) && pokemons.length > 0 ? (
          pokemons.map((p, idx) => (
            <div key={idx} className='pokemon-card'>
              <div className='pokemon-info'>
                <span className='pokemon-label'>Nombre Pokemon: </span>
                <span className='pokemon-value'>{p.name}</span>
              </div>
              <div className='pokemon-info'>
                <span className='pokemon-label'>Tipo: </span>
                <span className="pokemon-value">{p.tipo}</span>
              </div>
              <div className='pokemon-info'>
                <span className='pokemon-label'>Naturaleza:  </span>
                <span className="pokemon-value">{p.naturaleza}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No hay pokemons disponibles</div>
        )}
      </div>
    </div>
  )
}

export default PokemonListComponent