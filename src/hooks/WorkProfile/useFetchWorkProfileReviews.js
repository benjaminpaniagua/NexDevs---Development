import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchReviews = ({ workID, updated }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await axios.get(
          `https://nexdevsapi.somee.com/Reviews/ConsultarWorkId?workId=${workID}`
        );
        setReviews(response.data); // Set reviews data from response
      } catch (error) {
        console.error("Error fetching reviews: ", error);
        setError(error.message); // Set error message if fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (workID) {
      fetchReviews(); // Fetch reviews only if workID is available
    }
  }, [workID, updated]); // Run effect when workID changes

  return { reviews, loading, error }; // Return reviews, loading state, and error
};
