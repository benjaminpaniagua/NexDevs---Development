import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../utils/AuthProvider";

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
          const response = await axios.get(
            `https://nexdevsapi.somee.com/WorkProfile/BuscarEmail?email=${userEmail}`
          );
          if (response.data === "") {
            const responseUser = await axios.get(
              `https://nexdevsapi.somee.com/Users/BuscarEmail?email=${userEmail}`
            );
            setUserData(responseUser.data);
            console.log(userData.data);
          } else {
            setUserData(response.data);
            console.log(userData.data);
          }
        } catch (error) {
          setError("Error al cargar los datos del usuario");
          console.error("Error fetching user data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserData();
  }, [token]);

  return { userData, loading, error };
};
