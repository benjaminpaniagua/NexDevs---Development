import '../../index.css'
import { useEffect } from 'react';
import { SecondaryButtonOutline } from '../ui/Buttons';
import { useNavigate } from 'react-router-dom';
import { CardProfiles } from '../ui/Cards/CardProfiles';
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export function Featured_Profiles({ setIsLoading }) {
    const navigate = useNavigate();
    const { users, loading, error } = useFetchWorkUsers();

    const handleCardClick = (title) => {
        console.log(`Usuario seleccionada: ${title}`);
        navigate(`/workprofile/${title}`);
    };

    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    if (error) {
        navigate('/error503');
    }

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0 transition-all'>
                <h2 className="font-bold text-2xl mb-2 sm:text-center">Perfiles Destacados</h2>
                {loading ? (
                    <div>
                        <h3 className="text-center">Cargando perfiles...</h3>
                    </div>
                ) :
                    (
                        <div>
                            {/* Cards */}
                            <div>
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={20}
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
                                    style={{ paddingBottom: '24px' }}
                                >
                                    {users.map((user) => (
                                        <SwiperSlide key={user.workId}>
                                            <CardProfiles
                                                image={user.profilePictureUrl}
                                                name={user.name}
                                                biography={user.workDescription}
                                                province={user.province}
                                                city={user.city}
                                                number={user.number}
                                                email={user.email}
                                                id={user.workId}
                                                onClick={() => handleCardClick(user.workId)}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            {/* Cards */}
                        </div>
                    )}
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver Todos" extraStyles={"px-16 py-2 mt-5"} onClick={() => navigate('/Profiles')} />
                </div>
            </div>
        </>
    );
}