

export const doLoginFetch = async (email, password) => {
    const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'content-type': 'Application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    const data = await res.json()
    console.log('Respuesta del backend:', data); 
    return data
}

export const createUser = async (registerInfo) => {
    const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
             'Content-type': 'application/json'
        },
        body: JSON.stringify(
            registerInfo
        )
    })
    const data = await res.json()
    return data
}

export const getUserById = async (idUser) => {
    const token = localStorage.getItem('token'); 
    const res = await fetch(`http://localhost:3000/users/${idUser}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json' 
        }
        });
    const data = await res.json()
    return data
}

//add + del pokemon team + edit user
export const addPokemonTeam = async (idUser, idPokemon, authToken) => {

    const res = await fetch(`http://localhost:3000/users/${idUser}/team`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'auth-token': authToken
        },
        body: JSON.stringify({idPokemon})
    })

    const data = await res.json();
    return data;
}

export const delPokemonTeam = async (idUser, idPokemon, authToken) => {
    const res = await fetch(`http://localhost:3000/users/${idUser}/team`, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'auth-token': authToken
        },
        body: JSON.stringify({
            idPokemon: idPokemon
        })
    })

    const data = await res.json();
    return data
}

export const editUserPerfil = async (idUser, updatedData, authToken) => {
    const res = await fetch(`http://localhost:3000/users/${idUser}`, {
        method:'PATCH',
        headers:{
            'auth-token': authToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
})

const result = await res.json();
return result.user;
}