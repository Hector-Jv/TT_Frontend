import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@/context/UserContext";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useUser();


  const handleLogin = async () => {

    try {
      const response = await axios.post("http://localhost:5000/login", {
        correo: email,
        contrasena: password,
      });

      const { access_token, usuario, tipo_usuario } = response.data;
      localStorage.setItem('token', access_token);
      setUser({ usuario, tipo_usuario });
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response.data.error);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}

export default LoginForm;
