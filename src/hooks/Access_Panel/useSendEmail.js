// src/hooks/usePasswordReset.js
import { useState } from 'react';
import axios from 'axios';

export const useSendEmail = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const sendEmail = async (email) => {
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const response = await axios.post('https://localhost:7038/Users/Restablecer', null, {
                params: { email },
            });

            if (response.data === 'Este correo no se encuentra registrado') {
                try {
                    const response = await axios.post('https://localhost:7038/WorkProfile/Restablecer', null, {
                        params: { email },
                    });
                    setMessage(response.data);
                    setLoading(false);
                } catch (err) {
                    setError("Error al enviar la solicitud. Inténtalo de nuevo más tarde.");
                    console.error(err);
                }
            } else {
                setMessage(response.data);
                setLoading(false);
            }
        } catch (err) {
            setError("Error al enviar la solicitud. Inténtalo de nuevo más tarde.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return { sendEmail, loading, message, error };
};
