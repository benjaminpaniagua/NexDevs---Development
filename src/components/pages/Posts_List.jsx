import "../../index.css";
import { useState, useEffect } from "react";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";
import { useNavigate } from "react-router-dom";
import { useFetchWorkUserData } from "../../hooks/useFetchWorkUserData.js";

export function Posts_List() {
  const { data: posts, error, loading } = useFetchPosts();
  const { userData } = useFetchWorkUserData();

  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const renderTop = () => {
    if (userData.profileType === 'W') {
        return (
          <div className="flex justify-between">
          <h2 className="font-clash font-semibold text-4xl">Publicaciones</h2>
          {isLoggedIn ? (
            <SecondaryButtonOutline
              text="Crear publicación"
              extraStyles={"px-16 py-2"}
              onClick={() => navigate("/create-post")}
            />
          ) : null}
        </div>
        )
    }
    if (userData.profileType === 'U') {
        return (
          <div className="flex justify-between">
          <h2 className="font-clash font-semibold text-4xl">Publicaciones</h2>
        </div>
        )
    }
    if (!userData.profileType) {
        return (
          <div className="flex justify-between">
          <h2 className="font-clash font-semibold text-4xl">Publicaciones</h2>
        </div>
        )
    }
};

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
        <Loading_Screen Loading={loading} />
        {renderTop()}
        <div className="grid grid-cols-auto-350 md:grid-cols-1 gap-12 md:gap-8 xs:gap-10">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
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
