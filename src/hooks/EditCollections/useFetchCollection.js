import { useState, useEffect } from 'react';

export const useFetchCollection = (workId) => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCollections = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`https://localhost:7038/Collections/Consultar?workId=${workId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error en la petición: ${response.statusText}`);
                }

                const data = await response.json();
                setCollections(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (workId) {
            fetchCollections();
        }
    }, [workId]);

    return { collections, loading, error };
};