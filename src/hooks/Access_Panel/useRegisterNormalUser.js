import { useState } from "react";
import axios from "axios";

export const useRegisterNormalUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const registerUserProfile = async (userProfile) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "http://nexdevsapi.somee.com/Users/CrearCuenta",
        userProfile
      );
      //console.log(response.data);
      setMessage(response.data.message);
      return response.data;
    } catch (error) {
      setError("Error al crear la cuenta");
      setMessage(
        "Ya existe una cuenta con ese correo o los datos son incorrectos"
      );
    } finally {
      setLoading(false);
    }
  };

  return { registerUserProfile, loading, error, message };
};
