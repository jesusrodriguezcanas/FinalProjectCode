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


const userFromRedux = useSelector(state => state.user); 
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [flagLogin, setFlagLogin] = useState(true)
const [registerInfo, setRegisterInfo] = useState({name: '', email: '', password:'', username:'', phone: '', direccion:''});
const [error, setError] = useState('')

if (userFromRedux) {
  navigate('/perfil');
  return null;
}


const doLogin = async () => {
  const userInfo = await doLoginFetch(email, password);  // Llamada al backend
  console.log('userInfo', userInfo);
  
  if (userInfo && userInfo.token) {
    // Guarda el token en localStorage
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('user', JSON.stringify(userInfo.user))
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
  if(userInfo && userInfo.token) {
    localStorage.setItem('token', userInfo.token);
    localStorage.setItem('user', JSON.stringify(userInfo.user))
    dispatch(loadPerfil(userInfo.user));
    // setUser(userInfo)
    navigate('/perfil');
  } else {
    const errorMessage = userInfo?.error 
 
    
    setError(errorMessage);
    setTimeout(() => {
      setError('');
    }, 2000);
  }
};

const handlerRegisterInfo = (name, value) => {
setRegisterInfo({
  ...registerInfo,
  [name]: value
})
}

  return (
    <div className='login-container'>
      {userFromRedux ? (
        <UserProfileComponent user={userFromRedux} />
      ) : (
        <div className='login-form-container'>
          {flagLogin ? (
            <div>
              <h2 className='login-tittle'>Login</h2>
             <hr />
              <div>
                <div className='login-group'>
                  <span>Email: </span>
                  <input type="text" placeholder="Formato: xxx@gmail.com.." name="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Password: </span>
                  <input type="password" placeholder="Password.." name="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
              <div className='container-buttons-register'>
                <button className='home-button' onClick={doLogin}>Iniciar sesión</button>
                <button className='home-button' onClick={() => setFlagLogin(false)}>Quiero registrarme</button>
              </div>
            </div>
          ) : (
            <div>
              <h2 className='login-tittle'>Registro</h2>
              <hr />
              <div>
                <div className='login-group'>
                  <span>Nombre: </span>
                  <input type="text" placeholder="Nombre.." name="name" value={registerInfo.name} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Nombre usuario: </span>
                  <input type="text" placeholder="Nombre usuario.." name="username" value={registerInfo.username} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Email: </span>
                  <input
                    type="text" placeholder="Email.." name="email" value={registerInfo.email} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Teléfono: </span>
                  <input type="text" placeholder="Teléfono.." name="phone" value={registerInfo.phone} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Dirección: </span>
                  <input type="text" placeholder="Dirección.." name="direccion" value={registerInfo.direccion} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='login-group'>
                  <span>Password: </span>
                  <input type="password" placeholder="Contraseña" name="password" value={registerInfo.password} onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                </div>
                <div className='container-buttons-register'>

                <button className='home-button' onClick={doRegister}>Registrarme</button>
                <button className='home-button' onClick={() => setFlagLogin(true)}>Volver a login</button>
                </div>
                {error && <div className='register-error'>{error}</div>}
              
                </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginPage;