import '../../index.css'
import { CardPost } from '../ui/Cards/CardPost';
import { SecondaryButtonOutline } from '../ui/Buttons';
export function Posts() {

    const posts = [
        {
          title: "Transformación total de jardín en una casa de Puntarenas",
          imageUrl: "/images/Post_Image_Placeholder.png",
          description: 'Esta semana tuve el placer de trabajar en la transformación del jardín de una hermosa casa en Puntarenas. Los propietarios querían un espacio verde que fuera funcional...',
          user: 'Alejandro Robles',
          profilepicture: '/images/default_profile_picture.jpg'
        }]

    return (
        <>
            <div className="flex flex-col gap-2">
                <h3 className="font-clash font-medium md:text-[1.5rem]">Post destacado</h3>
                <CardPost title={posts[0].title} imageUrl={posts[0].imageUrl} description={posts[0].description} user={posts[0].user} profilepicture={posts[0].profilepicture} />
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver más" extraStyles={"px-16 py-2 mt-5"} />
                </div>
            </div>
        </>
    );
}