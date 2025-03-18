import React from 'react'
import { useState } from 'react'
import { createUser, doLoginFetch } from '../core/services/usersFetch'
import UserProfileComponent from '../components/user/UserProfileComponent'

const LoginPage = () => {

const [user, setUser] = useState(undefined)
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [flagLogin, setFlagLogin] = useState(true)
const [registerInfo, setRegisterInfo] = useState({})

const doLogin = async () => {
  //Hacer el inicio de sesión. Es decir, es el encargado de llamar al back, entre otras cosas...
  const userInfo = await doLoginFetch(email, password)
  console.log('userInfo', userInfo)
  setUser(userInfo)
}

const doRegister = async () => {
  const userInfo = await createUser(registerInfo)
//log para que me deuvuelva user creado
  console.log('userInfo', userInfo)
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
      {
        !user ? (
        flagLogin ? (
      <div>
            <h2>Login</h2>
            <div>
            <div>
                    <span>Email: </span>
                    <input type="text" placeholder='email' name='email' onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                    <span>Password: </span>
                    <input type="password" placeholder='password' name='password' onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                    <button onClick={doLogin}>Iniciar sesión</button>
            </div>
            </div>
            <div>
                    <button onClick={() => setFlagLogin(false)}>Quiero registrarme</button>
            </div>
      </div>
        ):(
          <div>
            <h2>Registro</h2>
                <div>
                    <div>
                        <span>Nombre</span>
                        <input type="text" placeholder='nombre' name='name' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <span>Username</span>
                        <input type="text" placeholder='username' name='email' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type="password" placeholder='password' name='password' onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}/>
                    </div>
                    <div>
                        <button onClick={doRegister}>Registrarme</button>
                    </div>
                </div>
                <div>
                    <button onClick={() => setFlagLogin(true)}>Volver a login</button>
                </div>
          </div>
        )
      ) : (
        <UserProfileComponent/>
       )
      }
    </div>
  )
}

export default LoginPage