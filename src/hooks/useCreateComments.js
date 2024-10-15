import { useState } from 'react';
import axios from 'axios';

export const useCreateComments = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createComments = async (comment) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://localhost:7038/Comments/Agregar', comment);
      //console.log(response.data);
      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      setError('Error al crear el comentario'); 
    } finally {
      setLoading(false);
    }
  };

  return { createComments, loading, error };
};