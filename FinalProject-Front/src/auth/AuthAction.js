export const login = (userData) => {
    return {
        type: 'LOGIN',
        payload: userData, // Datos del usuario logueado
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT', // Cuando el usuario se desloguea
    };
};
