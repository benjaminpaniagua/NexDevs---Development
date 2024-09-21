import '../../index.css'
import { useNavigate } from 'react-router-dom';
import { CardProfiles } from '../ui/Cards/CardProfiles';
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';

export function Featured_Profiles() {
    const navigate = useNavigate();
    const { users, loading, error } = useFetchWorkUsers();

    const handleCardClick = (title) => {
        console.log(`Usuario seleccionada: ${title}`);
        navigate(`/workprofile/${title}`);
    };

    /*if (error) {
        navigate('/');
    }*/

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0 transition-all'>
                <h2 className="font-clash mb-2 sm:text-center">Perfiles Destacados</h2>

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
                                style={{ paddingBottom: '69px' }}
                            >
                                {users.map((user) => (
                                    <SwiperSlide key={user.workId}>
                                        <CardProfiles
                                            image="/images/Profile_Placeholder.png"
                                            name={user.name}
                                            biography={user.workDescription}
                                            province={user.province}
                                            city={user.city}
                                            number={user.number}
                                            email={user.email}
                                            onClick={() => handleCardClick(user.workId)}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        {/* Cards */}
                    </div>
                    )}
            </div>
        </>
    );
}