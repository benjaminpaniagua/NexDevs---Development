import "../../index.css";
import { useState, useEffect } from "react";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useFetchLikedPosts } from "../../hooks/useFetchLikedPosts";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { useDeletePost } from "../../hooks/useDeletePost";
import Alert from "../ui/Alert";
import AddIcon from "@mui/icons-material/Add";

export function Posts_List({ userData }) {
  const { data: posts, error, loading } = useFetchPosts();
  const {
    likedPosts: likedPosts,
    error: likedError,
    loading: likedLoading,
  } = useFetchLikedPosts(userData?.userId ?? 0, userData?.workId ?? 0);

  const {
    deletePost,
    loading: loadingDelete,
    error: errorDelete,
  } = useDeletePost();

  console.log(likedPosts);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const liked = queryParams.get("liked");

  const [postList, setPostList] = useState([]); // Estado local para manejar la lista de publicaciones
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Sincroniza el estado local `postList` con los datos iniciales de `posts`
  useEffect(() => {
    //console.log("Datos de publicaciones recibidos:", posts);
    if (posts) {
      if (liked) {
        setPostList(likedPosts);
        //console.log("Lista de publicaciones actualizada:", likedPosts);
      } else {
        setPostList(posts);
      }
      //console.log("Lista de publicaciones actualizada:", posts);
    }
  }, [posts, likedPosts, liked]);

  const handlePostDelete = async (postId) => {
    const result = await deletePost(postId);
    if (errorDelete) {
      setAlert({
        show: true,
        message: `Error: ${errorDelete}`,
        type: "error",
      });
    } else {
      setAlert({
        show: true,
        message: "Publicación eliminada correctamente.",
        type: "success",
      });
      setPostList((prevPosts) =>
        prevPosts.filter((post) => post.postId !== postId)
      );
    }
  };

  const renderIcon = () => {
    return (
      <AddIcon className="text-white bg-black rounded-full w-6 h-6 sm:w-4 sm:h-4" />
    );
  };

  const renderTop = () => {
    return (
      <div className="flex justify-between gap-8">
        <h2 className="font-clash font-semibold text-4xl md:text-2xl">
          Publicaciones
        </h2>
        {userData.profileType === "W" && isLoggedIn && (
          <SecondaryButtonOutline
            text={
              <span className="sm:hidden inline text-center">
                Crear publicación
              </span> // Oculta el texto en pantallas sm o menores
            }
            icon={renderIcon()}
            extraStyles={
              "max-w-26 sm:w-[10rem] px-6 py- md:text-sm flex items-center place-content-center gap-2"
            }
            onClick={() => navigate("/create-post")}
          />
        )}
      </div>
    );
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
        <Alert alert={alert} setAlert={setAlert} />
        <Loading_Screen Loading={loading || loadingDelete} />
        {renderTop()}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-12 md:gap-8 xs:gap-10">
          {Array.isArray(postList) && postList.length > 0 ? (
            postList.map((post) => (
              <CardPost
                key={post.postId}
                postId={post.postId}
                imageUrl={post.postImageUrl}
                description={post.contentPost}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                userName={post.workProfile?.name}
                profilePictureUrl={post.workProfile?.profilePictureUrl}
                workId={post.workProfile?.workId}
                onDelete={() => handlePostDelete(post.postId)}
              />
            ))
          ) : (
            <p>No hay publicaciones disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
}
