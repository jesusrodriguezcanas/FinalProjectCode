import React from 'react'
import { useState } from 'react'
import { createUser, doLoginFetch } from '../core/services/usersFetch'
import {loadPerfil} from '../components/user/UserAction'
import UserProfileComponent from '../components/user/UserProfileComponent'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch();
const navigate = useNavigate();


const userFromRedux = useSelector(state => state.user); // Asume que tienes una slice de user en tu store de Redux
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [flagLogin, setFlagLogin] = useState(true)
const [registerInfo, setRegisterInfo] = useState({name: '', email: '', password:''});
const [error, setError] = useState('')

if (userFromRedux) {
  navigate('/perfil');
  return null;
}


const doLogin = async () => {
  const userInfo = await doLoginFetch(email, password);  // Llamada al backend
  console.log('userInfo', userInfo);  // Verifica lo que el backend devuelve
  
  if (userInfo && userInfo.token) {
    // Guarda el token en localStorage
    localStorage.setItem('token', userInfo.token);
    console.log('Token guardado', userInfo.token)
    // Actualiza el estado en Redux con los datos del usuario
    dispatch(loadPerfil(userInfo.user));
    
    // Navega al perfil
    navigate('/perfil');
  } else {
    console.log('Login failed');
  }
};



const doRegister = async () => {
  const userInfo = await createUser(registerInfo)
//log para que me deuvuelva user creado
  console.log('userInfo', userInfo)
  if(userInfo) {
    dispatch(loadPerfil(userInfo));
    navigate('/perfil');
  } else {
    console.log('Registration failed')
  }
  setUser(userInfo)
}

const handlerRegisterInfo = (name, value) => {
setRegisterInfo({
  ...registerInfo,
  [name]: value
})
}

  return (
    
    <div>
      {userFromRedux ? (
        <UserProfileComponent user={userFromRedux} />
      ) : (
        <div>
          {flagLogin ? (
            <div>
              <h2>Login</h2>
              <div>
                <div>
                  <span>Email: </span>
                  <input type="text" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <span>Password: </span>
                  <input type="password" placeholder="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                  <button onClick={doLogin}>Iniciar sesión</button>
                </div>
              </div>
              <div>
                <button onClick={() => setFlagLogin(false)}>Quiero registrarme</button>
              </div>
            </div>
          ) : (
            <div>
              <h2>Registro</h2>
              <div>
                <div>
                  <span>Nombre</span>
                  <input type="text" placeholder="nombre" name="name" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div>
                  <span>Email</span>
                  <input
                    type="text" placeholder="email" name="email" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div>
                  <span>Password</span>
                  <input type="password" placeholder="password" name="password" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div>
                  <button onClick={doRegister}>Registrarme</button>
                </div>
              </div>
              <div>
                <button onClick={() => setFlagLogin(true)}>Volver a login</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginPage;