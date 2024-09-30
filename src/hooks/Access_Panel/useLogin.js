import { useState } from 'react';
import axios from 'axios';

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
        const response = await axios.post('https://localhost:7038/WorkProfile/Login', {
            email: email,
            password: password
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });

      const token = response.data.token;
      localStorage.setItem('token', token);
      return { success: true, token };
    } catch (err) {
      setError('Error al iniciar sesión, verifica tus datos');
      return { success: false, error: err };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};