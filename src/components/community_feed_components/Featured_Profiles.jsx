import '../../index.css'
import { CardProfiles } from '../ui/Cards/CardProfiles';
import { useFetchUsers } from "../../hooks/useFetchUsers";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

export function Featured_Profiles() {
    const users = useFetchUsers();

    const handleCardClick = (title) => {
        console.log(`Usuario seleccionada: ${title}`);
    };

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0'>
                <h2 className="font-clash mb-2 sm:text-center">Perfiles Destacados</h2>

                <div className="">
                    <Swiper
                        modules={[Pagination, Autoplay, Mousewheel]}
                        spaceBetween={50}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            1024: {
                              slidesPerView: 3,
                            },
                          }}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop
                        mousewheel
                        style={{ paddingBottom: '50px' }} 
                    >
                            {users.map((user, index) => (
                                <SwiperSlide key={index}>
                                    <CardProfiles
                                        image={user.image}
                                        name={user.name}
                                        biography={user.biography}
                                        province={user.province}
                                        city={user.city}
                                        number={user.number}
                                        email={user.email}
                                        onClick={() => handleCardClick(user.name)}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

            </div>
        </>
    );
}


/*

                <div className='grid grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-12 md:gap-4'>
                    {usersToShow.map((user, index) => (
                        <CardProfiles
                            key={index}
                            image={user.image}
                            name={user.name}
                            biography={user.biography}
                            province={user.province}
                            city={user.city}
                            number={user.number}
                            email={user.email}
                            onClick={() => handleCardClick(user.name)}
                        />
                    ))}
                </div>

*/