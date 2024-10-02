import '../../index.css'
import { useState, useEffect } from "react";
import { CardPost } from '../ui/Cards/CardPost';
import { Modal_Post } from '../ui/Modal_Post/Modal_Post';
import { SecondaryButtonOutline } from '../ui/Buttons'
import { useFetchPosts} from "../../hooks/useFetchPosts";

export function Posts_List() {
    const posts = useFetchPosts();
    const [postsToShow, setPostsToShow] = useState(posts);
    const [selectedPost, setSelectedPost] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (post) => {
        setSelectedPost(post);
        setIsModalOpen(true);
        console.log(`Post seleccionada: ${post.title}`);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPost(null);
    };

    console.log(postsToShow);

    return (
        <>
            <div className='flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10'>
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
                                onClick={() => handleCardClick(post)}
                            />
                        ))}

                    </div>
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver Más" extraStyles={"px-16 py-2 mt-7"}  />
                </div>
            </div>
            {isModalOpen && selectedPost && (
                <Modal_Post post={selectedPost} onClose={closeModal} />
            )}
        </>
    );
}