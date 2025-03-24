import './App.css'
import React from 'react';
import store from './core/store'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage';
import LoginPage from './pages/LoginPage';
import ContactoPage from './pages/ContactoPage';
import { Provider} from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserProfileComponent from './components/user/UserProfileComponent';

function App() {


  return (
    <Provider store={store}>
      <Router> {/* Aquí se usa BrowserRouter (Router) para envolver las rutas */}
        <Routes> {/* Contenedor de todas las rutas de tu aplicación */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/pokedex" element={<PokedexPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/perfil" element={<UserProfileComponent />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
