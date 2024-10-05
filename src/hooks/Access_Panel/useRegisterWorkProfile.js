import { useState } from 'react';
import axios from 'axios';

export const useRegisterWorkProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const registerWorkProfile = async (workProfile) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://localhost:7038/WorkProfile/CrearCuenta', workProfile);
      console.log(response.data);
      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      setError('Error al crear la cuenta');
      setMessage("Ya existe una cuenta con ese correo o los datos son incorrectos");
    } finally {
      setLoading(false);
    }
  };

  return { registerWorkProfile, loading, error, message };
};