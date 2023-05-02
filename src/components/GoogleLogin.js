import React from 'react';
import { GoogleLogin as GoogleLoginComponent } from 'react-google-login';

const clientId = "579787135718-jnfmodam875d1mviv1h889j3ahnvulk4.apps.googleusercontent.com";

const GoogleLogin = () => {
  const handleSuccess = (response) => {
    // Procesa la respuesta de Google, guarda el token en localStorage y actualiza el estado de la aplicación
    console.log(response);
  };

  const handleError = (error) => {
    console.error('Error en el inicio de sesión con Google:', error);
  };

  return (
    <div>
      <GoogleLoginComponent
        clientId={clientId}
        onSuccess={handleSuccess}
        onFailure={handleError}
      />
    </div>
  );
};

export default GoogleLogin;
