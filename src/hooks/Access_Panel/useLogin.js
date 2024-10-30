import { useState } from "react";
import axios from "axios";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const workUserResponse = await axios.post(
        "http://nexdevsapi.somee.com/WorkProfile/Login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const workUserToken = workUserResponse.data.token;
      localStorage.setItem("token", workUserToken);
      return { success: true, token: workUserToken };
    } catch (err) {
      try {
        const normalUserResponse = await axios.post(
          "http://nexdevsapi.somee.com/Users/Login",
          {
            email: email,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const normalUserToken = normalUserResponse.data.token;
        localStorage.setItem("token", normalUserToken);
        return { success: true, token: normalUserToken };
      } catch (err) {
        setError("Error al iniciar sesión, verifica tus datos");
        return { success: false, error: err };
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
