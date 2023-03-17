import React, { useState } from 'react';
import './LoginForm.css';


interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (

    <div className= "form-container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
      <div className="form-container">
        <label className="form-label">Email:</label>
        <input className="form-input" type="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div>
        <label className="form-label">Contraseña:</label>
        <input className="form-input" type="Contraseña" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button className="form-button" type="submit">Login</button>
    </form>


    </div>
    
  );
};

export default LoginForm;



