import "../../index.css";
import { useState, useEffect } from "react";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useNavigate } from "react-router-dom";
import { Modal_Post } from "../ui/Modal_Post/Modal_Post";

export function Community_Posts() {
  const posts = useFetchPosts();
  const navigate = useNavigate();
  const [postsToShow, setPostsToShow] = useState([]);

  useEffect(() => {
    const updatePosts = () => {
      if (window.innerWidth <= 767) {
        setPostsToShow(posts.data.slice(0, 3));
      } else {
        setPostsToShow(posts.data.slice(0, 6));
      }
    };
    updatePosts();
    window.addEventListener("resize", updatePosts);
    return () => window.removeEventListener("resize", updatePosts);
  }, [posts.data]);

  console.log(posts);

  return (
    <>
      <div className="h-auto flex flex-col gap-2 sm:gap-0 max-w-[100rem] m-auto">
        <h2 className="font-bold text-2xl mb-2 sm:text-center">Publicaciones</h2>
        <div className="grid grid-cols-auto-350 md:grid-cols-1 gap-12 md:gap-8 xs:gap-10">
          {postsToShow.length > 0 ? (
            postsToShow.map((post) => (
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
            <p>No posts available</p>
          )}
        </div>
        <div className="flex justify-center">
          <SecondaryButtonOutline
            text="Ver Más"
            extraStyles={"px-16 py-2 mt-7"}
            onClick={() => navigate("/posts")}
          />
        </div>
      </div>
    </>
  );
}
