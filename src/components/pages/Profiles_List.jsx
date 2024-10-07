import { useState } from "react";
import { Search_Input } from "../ui/Search_Input";
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { CardProfiles } from "../ui/Cards/CardProfiles";
import { useNavigate } from "react-router-dom";
import { Loading_Screen } from '../ui/Loading_Screen.jsx'

export function Profiles_List() {
    const navigate = useNavigate();
    const { users, loading, error } = useFetchWorkUsers();
    const [searchTerm, setSearchTerm] = useState("");

    const handleCardClick = (title) => {
        console.log(`Usuario seleccionada: ${title}`);
        navigate(`/workprofile/${title}`);
    };

    const handleSearch = (search) => {
        setSearchTerm(search.toLowerCase());
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.workDescription.toLowerCase().includes(searchTerm) ||
        user.province.toLowerCase().includes(searchTerm) ||
        user.city.toLowerCase().includes(searchTerm)
    );

    if (error) {
        navigate('/error503');
    }

    return (
        <>
            <div className="flex flex-col gap-4 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">

                {/* Loading Screen */}
                <Loading_Screen Loading={loading} />
                {/* Loading Screen */}

                <div className="flex sm:flex-col sm:gap-5 sm:mb-0 mt-16 mb-4 items-center justify-between">
                    <h2 className="font-clash font-semibold text-4xl">Perfiles</h2>
                    <Search_Input search={handleSearch} />
                </div>
                {loading ? (
                    <h3 className="text-center">Cargando Perfiles...</h3>
                ) : (
                    <div className="grid gap-10">
                        {filteredUsers.length > 0 ? (
                            <div className="grid grid-cols-4 xl:grid-cols-auto-250 gap-8">
                                {filteredUsers.map((user) => (
                                    <CardProfiles
                                        key={user.workId}
                                        image="/images/Profile_Placeholder.png"
                                        name={user.name}
                                        biography={user.workDescription}
                                        province={user.province}
                                        city={user.city}
                                        number={user.number}
                                        email={user.email}
                                        onClick={() => handleCardClick(user.workId)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="h-24 flex items-center justify-center">
                                <h3 className="text-center text-gray-500">No se encontraron resultados para "{searchTerm}".</h3>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};
