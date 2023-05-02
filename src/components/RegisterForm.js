import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/registro', {
        correo: email,
        usuario: username,
        contrasena: password,
      });

      const { usuario, message } = response.data;
      console.log('Usuario:', usuario);
      console.log('Mensaje:', message);
    } catch (error) {
      console.error('Error al registrarse:', error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Registrarse</h1>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default RegisterForm;
