import "../../index.css";
import { useState, useEffect } from "react";
import { CardPost } from "../ui/Cards/CardPost";
import { Modal_Post } from "../ui/Modal_Post/Modal_Post";
import { SecondaryButtonOutline } from "../ui/Buttons";
import { useFetchPosts } from "../../hooks/useFetchPosts";
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";

export function Posts_List() {
  const { data: posts, error, loading } = useFetchPosts();

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="flex flex-col gap-6 py-14 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
        <Loading_Screen Loading={loading} />
        <h2 className="font-clash font-semibold text-4xl">Publicaciones</h2>
        <div className="grid grid-cols-auto-350 md:grid-cols-1 gap-12 md:gap-8 xs:gap-10">
          {Array.isArray(posts) && posts.length > 0 ? (
            posts.map((post) => (
              <CardPost
                key={post.postId}
                imageUrl={post.postImageUrl}
                description={post.contentPost}
                likesCount={post.likesCount}
                commentsCount={post.commentsCount}
                userName={post.workProfile?.name}
                profilePictureUrl={post.workProfile?.profilePictureUrl}
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