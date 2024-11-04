import { useState } from 'react';
import axios from 'axios';

export const useAddReview = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const addReview = async (reviewData) => {
    setLoading(true);
    setError(null);
    setMessage('');

    try {
      const response = await axios.post('https://nexdevsapi.somee.com/Reviews/Agregar', reviewData);
      setMessage(response.data);
    } catch (err) {
      setError(`Error: ${err.response?.data || err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return {
    addReview,
    loading,
    error,
    message,
  };
};