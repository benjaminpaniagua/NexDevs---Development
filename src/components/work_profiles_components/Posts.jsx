import "../../index.css";
import { CardPost } from "../ui/Cards/CardPost";
import { SecondaryButtonOutline } from "../ui/Buttons";
export function Posts() {

  

  const posts = [
    {
      postId: 1,
      postImageUrl: "/images/Post_Image_Placeholder.png",
      description: "Esta semana tuve el placer de trabajar en la transformación del jardín de una hermosa casa en Puntarenas. Los propietarios querían un espacio verde que fuera funcional",
      name: "Servicio Verde",
      profilePicture: "/images/default_profile_picture.jpg",
      commentsCount: 5,
      likesCount: 10,
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-2">
        <h3 className="font-clash font-medium md:text-[1.5rem]">Posts</h3>
        <CardPost
          key={posts[0].postId}
          imageUrl={posts[0].postImageUrl}
          description={posts[0].description}
          likesCount={posts[0].likesCount}
          commentsCount={posts[0].commentsCount}
          userName={posts[0].name}
          profilePictureUrl={posts[0].profilePicture}
        />
        <div className="flex justify-center">
          <SecondaryButtonOutline
            text="Ver más"
            extraStyles={"px-16 py-2 mt-5"}
          />
        </div>
      </div>
    </>
  );
}
