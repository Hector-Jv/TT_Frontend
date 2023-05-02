import React, { useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { GoogleOAuthProvider } from "react-oauth-google";

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const API_URL = "http://localhost:5000/user";

      const fetchData = async () => {
        try {
          const response = await fetch(API_URL, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data); // Guardar el objeto completo devuelto por la API en el estado user
          }
        } catch (error) {
          console.error("Error al obtener la información del usuario:", error);
        }
      };

      fetchData();
    }
  }, [setUser]);

  return (
    <GoogleOAuthProvider clientId="579787135718-jnfmodam875d1mviv1h889j3ahnvulk4.apps.googleusercontent.com">
      <div>
        {user ? (
          <h1>
            Hola, {user.usuario.usuario} ({user.usuario.tipo_usuario})
          </h1>
        ) : (
          <h1>Hola a todos</h1>
        )}
        {/* Resto del código del componente */}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
