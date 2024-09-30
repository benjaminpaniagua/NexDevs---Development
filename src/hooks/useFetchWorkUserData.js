import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { useAuth } from '../utils/AuthProvider';

export const useFetchWorkUserData = () => {
  const { token } = useAuth();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (token) {
        setLoading(true);
        const decodedToken = jwtDecode(token);
        const userEmail = decodedToken.nameid;
        try {
          const response = await axios.get(`https://localhost:7038/WorkProfile/BuscarEmail?email=${userEmail}`);
          setUserData(response.data);
        } catch (error) {
          setError('Error al cargar los datos del usuario');
          console.error('Error fetching user data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [token]);

  return { userData, loading, error };
};