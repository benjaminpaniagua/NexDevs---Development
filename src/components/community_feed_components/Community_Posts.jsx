import '../../index.css'
import { useState, useEffect } from "react";
import { CardPost } from '../ui/Cards/CardPost';
import { SecondaryButtonOutline } from '../ui/Buttons'
import { useFetchPosts} from "../../hooks/useFetchPosts";

export function Community_Posts() {
    const posts = useFetchPosts();
    const [ postsToShow, setPostsToShow] = useState(posts);

    useEffect(() => {
        const updatePosts = () => {
            if (window.innerWidth <= 768) {
                setPostsToShow(posts.slice(0, 4));
            } else {
                setPostsToShow(posts.slice(0, 8));
            }
        };
        updatePosts();
        window.addEventListener("resize", updatePosts);
        return () => window.removeEventListener("resize", updatePosts);
    }, []);

    const handleCardClick = (title) => {
        console.log(`Post seleccionada: ${title}`);
    };

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0'>
                <h2 className="font-clash sm:text-center">Publicaciones</h2>
                    <div className='grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-12 md:gap-8 xs:gap-10'>

                        {postsToShow.map((post, index) => (                            
                            <CardPost
                                key={index}
                                title={post.title}
                                imageUrl={post.imageUrl}
                                description={post.description}
                                user={post.user}
                                profilepicture={post.profilepicture}
                                onClick={() => handleCardClick(post.title)}
                            />
                        ))}

                    </div>
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver Más" extraStyles={"px-16 mt-7"} />
                </div>
            </div>
        </>
    );
}