import React, { useReducer } from 'react';
import LoginForm from './LoginForm';
import { authReducer, AuthState } from '../reducers/authreducer';

const LoginPage = () => {
  const [authState, dispatch] = useReducer(authReducer, { isLoggedIn: false } as AuthState);

  const handleLogin = (email: string, password: string) => {
    if (email === 'admin@admin.com' && password === '12345') {
      dispatch({ type: 'LOGIN' ,});
      dispatch({ type: 'SET_SUCESS', payload: 'Contraseña e Email conrrecto. \n Bienvenido!'})
    } else {
      dispatch({ type: 'SET_ERROR', payload: 'Contraseña o email incorrecto' });
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className= "form-container">
      <h1>Login</h1>
      {authState.isLoggedIn ? (
        <div>
          <p>Bienvenido </p>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          {authState.errorMessage && <p>{authState.errorMessage}</p>}
          
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default LoginPage;