

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
    const result = await res.json()
    return result.user
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
    const res = await fetch(`http://localhost:3000/users/${idUser}`)
    const result = await res.json()
    return result.user
}