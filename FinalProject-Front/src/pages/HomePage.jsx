import React from 'react'
import {useNavigate} from 'react-router-dom'


const HomePage = () => {

const navigate = useNavigate(); 

const goPokedex = () => {
  navigate('/pokedex'); // Redirige a la página de la Pokedex
};

const goContacto = () =>{
  navigate('/contacto');
}

const goLogin =  () => {
  navigate('/login');
}

const goHome = () => {
  navigate('/');
}

   return (
    <div className="home-container">
    <h2 className='home-tittle'>¡Crea tu equipo pokemon ahora!</h2>
    <hr/>
    <div>
    <p className='home-description'>¡Únete a la aventura Pokémon! Regístrate ahora para construir tu propio equipo y comienza tu viaje como entrenador Pokémon. </p>
    </div>
    <p className='home-description'> ¡Es tu momento de brillar! Regístrate, forma tu equipo y prepárate para conquistar el mundo Pokémon. ¿Estás listo para el desafío? </p>

    

    <div className='home-buttons'>
      <div>
    <p className='home-description'> ¡Coloca el ratón encima de <strong>REGISTRO</strong> y podrás empezar tu camino! </p>
      </div>
      <div className='container-button-home'>
      <button  onClick={goLogin}>Registro</button>
      <button  onClick={goContacto}>Contacto</button>
      <button  onClick={goPokedex}>Ver Pokedex</button>
      </div>
    </div>

  </div>
  )
}

export default HomePage