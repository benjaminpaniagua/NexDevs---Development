import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const useFetchLikedPosts = (userId, workProfileId) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const liked = queryParams.get('liked')

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
  }, [userId, workProfileId, liked]);

  return { likedPosts, loading, error };
};
