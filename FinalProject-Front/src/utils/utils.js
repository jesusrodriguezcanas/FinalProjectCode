
//logout global
export const logout = ( dispatch,navigate) => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    dispatch({type: 'LOGOUT'})
    navigate('/')

}



  