import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:5000/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("Respuesta de la API:", response);
          const { usuario, tipo_usuario } = response.data;
          setUser({ usuario, tipo_usuario });
        })
        .catch((error) => {
          console.error("Error al obtener información del usuario:", error);
          if (error.response && error.response.status === 401) {
            localStorage.removeItem("token");
          }
        });
    } else {
      setUser(null);
    }
  }, []);
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
