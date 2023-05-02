import { useState, useEffect } from 'react';
import { GoogleAuth } from 'react-oauth-google';

const useGoogleAuth = (clientId) => {
  const [googleAuth, setGoogleAuth] = useState(null);

  useEffect(() => {
    const initGoogleAuth = async () => {
      const auth = await GoogleAuth.init({ clientId });
      setGoogleAuth(auth);
    };

    if (!googleAuth) {
      initGoogleAuth();
    }
  }, [googleAuth, clientId]);

  return googleAuth;
};

export default useGoogleAuth;
