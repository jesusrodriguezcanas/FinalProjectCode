import React from 'react'
import PokemonListComponent from '../components/pokemons/PokemonListComponent'
import { useNavigate } from 'react-router-dom'

const PokedexPage = (props) => {
const navigate = useNavigate();

const goHome = () => {
  navigate('/')
}

const goProfile = () => {
  navigate('/perfil')
}


  return (
<div>
  <div>
  {/* solo se tiene que ver si indentifica que hay un usuario que haya hecho login sino no aparece este boton */}
    <button onClick={goProfile}>Mi perfil</button>
  </div>
  <div>
    <h2>¡Crea tu equipo soñado de Pokémon!</h2>
    <hr />
    <p>¡Con <strong>25 Pokémon diferentes</strong> de <strong>diversos tipos</strong>, podrás formar el <strong>equipo más poderoso</strong> que jamás hayas imaginado!</p>
    <p>Para poder <strong>capturarlos y construir tu equipo</strong>, necesitarás <strong>registrarte</strong>. ¡Solo así podrás acceder a esta increíble colección! 🌟</p>
    <h3>¡Únete a la batalla y demuestra tu destreza! 💥</h3>
    <div>
    <button onClick={goHome}>Volver al Menú</button>
    </div>
  </div>
  <div>
    <PokemonListComponent/>
  </div>

</div>
  )
}

export default PokedexPage