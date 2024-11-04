import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchLikedPosts = (userId, workProfileId) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLikedPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get("https://nexdevsapi.somee.com/Likes/LikedItems", {
          params: { userId, workProfileId },
          headers: {
            "Content-Type": "application/json",
          },
        });

        setLikedPosts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Solo ejecutar la solicitud si userId o workProfileId tienen un valor
    if (userId || workProfileId) {
      fetchLikedPosts();
    }
  }, [userId, workProfileId]);

  return { likedPosts, loading, error };
};
