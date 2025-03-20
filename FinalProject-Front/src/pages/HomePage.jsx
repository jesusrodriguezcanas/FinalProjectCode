import React, { useState } from 'react'
import LoginPage from './LoginPage'
import PokedexPage from './PokedexPage'
import ContactoPage from './ContactoPage'
import {useNavigate} from 'react-router-dom'


const HomePage = () => {

  const navigate = useNavigate(); // Hook de React Router para la navegación

const [menuOption, setMenuOption] = useState(undefined)

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
    <div>
    <h2>Bienvenido a Pokemon Battle</h2>
    <p>¿Quieres registrarte y armar tu propio equipo?</p>

    <div>
      <button onClick={goLogin}>Registro</button>
      <button onClick={goPokedex}>Ver Pokedex</button>
      <button onClick={goContacto}>Pag Contacto</button>
    </div>

    {/* Aquí asumes que las rutas están definidas en App.js con React Router */}
  </div>
  )
}

export default HomePage