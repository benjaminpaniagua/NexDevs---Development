import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCollection = (workId) => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/Collections/Consultar`,
          {
            params: { workId },
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setCollections(response.data);
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