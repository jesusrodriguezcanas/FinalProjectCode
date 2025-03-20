

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

export const createUser = async (newUser) => {
    const res = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
             'content-type': 'Application/json'
        },
        body: JSON.stringify(
            newUser
        )
    })
    const result = await res.json()
    return result.user
}

export const getUserById = async (idUser) => {
    const res = await fetch(`http://localhost:3000/users/${idUser}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`, // Añade el token en las cabeceras
            'Content-Type': 'application/json' 
        }
        });
    const result = await res.json()
    return result.user
}

//add + del pokemon team + edit user
//getuserbyid hace referencia al LOADPERFIL
export const addPokemonTeam = async (idUser, pokemon, token) => {
    const res = await fetch(`http://localhost:3000/users/${idUser}/team`, {
        method: 'POST',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pokemon})
    })

    const result = await res.json();
    return result.user
}

export const delPokemonTeam = async (idUser, idPokemon, authToken) => {
   // const authToken = localStorage.getItem('token');
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

export const editUserPerfil = async (idUser, updatedData, token) => {
    const res = await fetch(`http://localhost:3000/users/${idUser}`, {
        method:'PATCH',
        headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({updatedData})
})

const result = await res.json();
return result.user;
}