import { useState } from 'react';
import axios from 'axios';

export const useAddSkills = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const addSkills = async (skill) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('https://localhost:7038/WorkSkills/Agregar', skill);
      //console.log(response.data);
      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      setError('Error al agregar los skills');
      setMessage("Error al agregar los skills");
    } finally {
      setLoading(false);
    }
  };

  return { addSkills, loading, error, message };
};