import { useEffect, useState } from "react";
import axios from 'axios';

export const useFetchCiudades = ({provincia}) => {
    const [ciudades, setCiudadess] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        const fetchCiudades = async () => {
            try {
                const response = await axios.get(`https://ubicaciones.paginasweb.cr/provincia/${provincia}/cantones.json`, {
                    cancelToken: source.token
                });
                setCiudadess(Object.values(response.data));
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
        
        if (provincia) {
            fetchCiudades();
        }
        return () => {
            source.cancel('Solicitud Cancelada');
        };
    }, [provincia]);

    return { ciudades, loading, error };

};