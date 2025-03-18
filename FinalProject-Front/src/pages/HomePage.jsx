import React, { useState } from 'react'
import LoginPage from './LoginPage'
import PokedexPage from './PokedexPage'
import ContactoPage from './ContactoPage'


const HomePage = () => {

const [menuOption, setMenuOption] = useState(undefined)

const goPokedex = () => {
  setMenuOption(1)
}

const goContacto = () =>{
  setMenuOption(2)
}

const goLogin =  () => {
 setMenuOption(0)
}

const goHome = () => {
  setMenuOption(undefined)
}

   return (
    <div>
      {menuOption === undefined && (
        <div>
        <h2>Bienvenido a Pokemon Battle</h2>
        <p>¿Quieres registrarte y armar tu propio equipo?</p>
        </div>

      )}
      <div>
      {menuOption === undefined && (
        <div>
          <button onClick={goLogin}>Registro</button>
          <button onClick={goPokedex}>Ver Pokedex</button>
          <button onClick={goContacto}>Pag Contacto</button>
        </div>
      )}
      </div>
      <div>
      {menuOption === 0 && <LoginPage />} {/* Si menuOption es 0, muestra LoginPage */}
        {menuOption === 1 && (
         <PokedexPage goHome={goHome}/>
        )}
        {menuOption === 2 && (
          <ContactoPage/>
        )}
      </div>
    </div>
  )
}

export default HomePage