import React from 'react';
import Link from 'next/link';
import { useUser } from '@/context/UserContext';



function Header() {  

  const { user, setUser } = useUser();

  function logout() {
    // Eliminar el token del almacenamiento local
    localStorage.removeItem('access_token');
    
    // Eliminar la información del usuario del contexto
    setUser(null);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Inicio
            </Link>
          </li>
          {!user && (
            <>
              <li>
                <Link href="/login">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="/register">
                  Registrarse
                </Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <button onClick={logout}>Cerrar sesión</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}



export default Header;
