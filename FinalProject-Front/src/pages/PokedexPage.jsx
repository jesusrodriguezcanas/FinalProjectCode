import React from 'react'
import PokemonListComponent from '../components/pokemons/PokemonListComponent'

const PokedexPage = (props) => {

  const {
    goHome
  } = props

  return (
    <div>
      <div>
    <h2>¡Crea tu equipo soñado de Pokémon!</h2>
    <hr />
    <p>¡Con <strong>25 Pokémon diferentes</strong> de <strong>diversos tipos</strong>, podrás formar el <strong>equipo más poderoso</strong> que jamás hayas imaginado!</p>
    <p>Para poder <strong>capturarlos y construir tu equipo</strong>, necesitarás <strong>registrarte</strong>. ¡Solo así podrás acceder a esta increíble colección! 🌟</p>
    <h3>¡Únete a la batalla y demuestra tu destreza! 💥</h3>
    <button onClick={goHome}>Volver al Menú</button>
  </div>
  <div>
    <PokemonListComponent/>
  </div>

    </div>
  )
}

export default PokedexPage