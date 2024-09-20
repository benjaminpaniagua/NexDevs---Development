import '../../index.css'
import { useState, useEffect } from "react";
import { CardProfiles } from '../ui/Cards/CardProfiles';
import { useFetchUsers } from "../../hooks/useFetchUsers";

export function Featured_Profiles() {
    const users = useFetchUsers();
    const [usersToShow, setUsersToShow] = useState(users);

    useEffect(() => {
        const updateUsers = () => {
            if (window.innerWidth <= 768) {
                setUsersToShow(users.slice(0, 1));
            } else {
                setUsersToShow(users.slice(0, 3));
            }
        };
        updateUsers();
        window.addEventListener("resize", updateUsers);
        return () => window.removeEventListener("resize", updateUsers);
    }, []);

    const handleCardClick = (title) => {
        console.log(`Categoría seleccionada: ${title}`);
    };

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0'>
                <h2 className="font-clash mb-2 sm:text-center">Perfiles Destacados</h2>
                <div className='grid grid-cols-3 md:grid-cols-1 gap-12 md:gap-4'>
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
            </div>
        </>
    );
}