import { useState, useEffect } from "react";
import axios from "axios";
import { useFetchWorkUserData } from "./useFetchWorkUserData";
import { useLocation, useNavigate } from "react-router-dom";

const useLikePost = (postId, initialLikesCount) => {
  const { userData } = useFetchWorkUserData();
  const [currentLikesCount, setCurrentLikesCount] = useState(initialLikesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const liked = queryParams.get('liked')

  //CHECK IF USER IS LOGGED IN
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      if (userData) {
        fetchIsLiked();
      }
    }
  }, [userData]);

  //GET LIKES COUNT AND IF IS LIKED BY USER
  const fetchIsLiked = async () => {
    if (!userData) return;
    try {
      const userId = userData?.userId || 0;
      const workProfileId = userData?.workId || 0;
      const url = `https://nexdevsapi.somee.com/Likes/CheckIfIsLiked`;
      
      const response = await axios.get(url, {
        params: {
          postId,
          userId,
          workProfileId,
        },
        headers: {
          accept: "application/json",
        },
      });

      setIsLiked(response.data);
    } catch (error) {
      console.error("Error fetching liked status:", error);
    }
  };

  //UPDATE LIKES COUNT AND IS LIKED BY USER
  useEffect(() => {
    fetchIsLiked();
  }, [postId, userData]);

  //LIKE POST FUNCTION
  const handleLikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }
    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;
    const urlLike = `https://nexdevsapi.somee.com/Likes/LikePost`;

    try {
      await axios.post(urlLike, { postId, userId, workProfileId }, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setIsLiked(true);
      setCurrentLikesCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.error("Error al dar like al post:", error);
    }
  };

  //DISLIKE POST FUNCTION
  const handleDislikePost = async () => {
    if (!isLoggedIn) {
      navigate("/Access_Panel/login");
      return;
    }
    const userId = userData?.userId || 0;
    const workProfileId = userData?.workId || 0;
    const urlDislike = `https://nexdevsapi.somee.com/Likes/DislikePost`;

    try {
      await axios.delete(urlDislike, {
        data: { postId, userId, workProfileId },
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      setIsLiked(false);
      setCurrentLikesCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    } catch (error) {
      console.error("Error al dar dislike al post:", error);
    }
  };

  return {
    currentLikesCount,
    isLiked,
    handleLikePost,
    handleDislikePost,
  };
};

export default useLikePost;
