import React from 'react'
import PokemonListComponent from '../components/pokemons/PokemonListComponent'
import { useNavigate } from 'react-router-dom'
import { logout } from '../utils/utils'
import { useDispatch } from 'react-redux'

const PokedexPage = (props) => {
const navigate = useNavigate();
const dispatch = useDispatch()

const goHome = () => {
  navigate('/')
}

const goProfile = () => {
  navigate('/perfil')
}

const user = JSON.parse(localStorage.getItem('user')); // Suponiendo que guardaste el usuario en localStorage


  return (
<div className='container-pklist'>
{user && (
  <div className='container-button-pokedex'>
        <div>
          <button className='home-button-pokedex' onClick={goProfile}>Mi perfil</button>
        </div>
        <div>
        <button className='home-button-pokedex' onClick={() => logout(dispatch, navigate)}>Volver al Menú</button>
        </div>
        </div>
        )}
  <div className='container-pokedex'>
    <h2 className='general-tittle'>¡Crea tu equipo soñado de Pokémon!</h2>
    <hr />
    <div className='container-info-pokedex'>
    <p>¡Con <strong>25 Pokémon diferentes</strong> de <strong>diversos tipos</strong>, podrás formar el <strong>equipo más poderoso</strong> que jamás hayas imaginado!</p>
    <p>Para poder <strong>capturarlos y construir tu equipo</strong>, necesitarás <strong>registrarte</strong>. ¡Solo así podrás acceder a esta increíble colección! 🌟</p>
    <h3>¡Únete a la batalla y demuestra tu destreza! 💥</h3>
    </div>
    {!user && (
    <div className='container-home-button'>
    <button className='home-button' onClick={() => logout(dispatch, navigate)}>Volver al Menú</button>
    </div>
    )}
  </div>
  <div >
    <PokemonListComponent/>
  </div>

</div>
  )
}

export default PokedexPage