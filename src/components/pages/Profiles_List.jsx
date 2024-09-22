import "../../index.css";
import { CardProfiles } from "../ui/Cards/CardProfiles";
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { Search_Input } from "../ui/Search_Input";
import { useNavigate } from "react-router-dom";

export function Profiles_List() {
  const navigate = useNavigate();
  const { users, loading, error } = useFetchWorkUsers();
  const handleCardClick = (title) => {
    console.log(`Usuario seleccionada: ${title}`);
    navigate(`/workprofile/${title}`);
  };
  return (
    //mt-10 grid gap-12 mx-auto px-20 max-w-[100rem] md:flex-col sm:px-10
    <div className="h-auto mt-10 grid mx-auto max-w-[100rem] min-w-[10rem] px-20 sm:px-10">
      <div className="flex mt-20 mb-4 items-center justify-between">
        <h2 className="font-clash">Perfiles</h2>
        <Search_Input />
      </div>
      {loading ? (
        <h3 className="text-center">Cargando perfiles...</h3>
      ) : (
        <div>
          <div className="grid grid-cols-auto-350 sm:grid-cols-auto-250 mx-auto md:grid-cols-auto gap-8 gap-y-20">
            {users.map((user) => (
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
        </div>
      )}
    </div>
  );
}
