import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetchProvincias = () => {
    const [provincias, setProvincias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchProvincias = async () => {
            try {
                const response = await axios.get(`https://ubicaciones.paginasweb.cr/provincias.json`, {
                    cancelToken: source.token
                });
                setProvincias(response.data);
            } catch (err) {

                if (axios.isCancel(err)) {
                    console.log('Solicitud Cancelada', err.message);
                } else {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProvincias();
        return () => {
            source.cancel('Solicitud Cancelada');
        };
    }, []);

    return { provincias, loading, error };

};