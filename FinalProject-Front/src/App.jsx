import './App.css'
import React from 'react';
import store from './core/store'
import HomePage from './pages/HomePage'
import { Provider} from 'react-redux'
import LoginPage from './pages/LoginPage'

function App() {


  return (
    <Provider store={store}>
      <HomePage/>
    </Provider>
  )
}

export default App
