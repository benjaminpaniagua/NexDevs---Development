import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search_Input } from "../ui/Search_Input";
import { useFetchWorkUsers } from "../../hooks/useFetchWorkUsers";
import { CardProfiles } from "../ui/Cards/CardProfiles";
import { Loading_Screen } from "../ui/Loading_Screen.jsx";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useFetchConsultCategory } from "../../hooks/useFetchConsultCategory";


export function Profiles_List() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    users,
    loading: usersLoading,
    error: usersError,
  } = useFetchWorkUsers();
  const {
    categories,
    loading: categoriesLoading,
    error: categoriesError,
  } = useFetchCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const { data: filteredUsersByCategory, loading: categoryLoading } =
    useFetchConsultCategory(selectedCategoryId);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");

    if (categoryParam && categories.length > 0) {
      const category = categories.find(
        (cat) => cat.categoryName === categoryParam
      );
      if (category) {
        setSelectedCategoryId(category.categoryId);
      }
    }
  }, [location, categories]);

  const handleCardClick = (title) => {
    console.log(`Usuario seleccionado: ${title}`);
    navigate(`/workprofile/${title}`);
  };

  const handleSearch = (search) => {
    setSearchTerm(search.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };

  const filteredUsers =
    selectedCategoryId && filteredUsersByCategory
      ? filteredUsersByCategory.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.workDescription.toLowerCase().includes(searchTerm) ||
            user.province.toLowerCase().includes(searchTerm) ||
            user.city.toLowerCase().includes(searchTerm)
        )
      : users.filter(
          (user) =>
            user.name.toLowerCase().includes(searchTerm) ||
            user.workDescription.toLowerCase().includes(searchTerm) ||
            user.province.toLowerCase().includes(searchTerm) ||
            user.city.toLowerCase().includes(searchTerm)
        );

  if (usersError || categoriesError) {
    navigate("/error503");
  }

  return (
    <>
      <div className="flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
        {/* Pantalla de carga */}
        <Loading_Screen
          Loading={usersLoading || categoriesLoading || categoryLoading}
        />
        {/* Pantalla de carga */}

        <div className="flex sm:flex-col sm:gap-5 sm:mb-0 mt-12 md:mt-2 mb-4 items-center justify-between md:items-start">
          <h2 className="font-clash font-semibold text-4xl md:text-2xl">Perfiles</h2>
          <div className="flex md:flex-col md:w-full gap-4">
            <Search_Input search={handleSearch} />
            <div className="flex md:flex-col gap-4 items-center md:items-start">
              <h4 className="text-sm">Filtrar:</h4>
              <select
                onChange={handleCategoryChange}
                value={selectedCategoryId}
                className="font-montserrat font-semibold border-2 border-clr-black rounded-lg text-sm w-full px-4 py-2 text-clr-grey-light"
              >
                <option value="">Todas las categorías</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {usersLoading || categoryLoading ? (
          <Loading_Screen
            Loading={usersLoading || categoriesLoading || categoryLoading}
          />
        ) : (
          <div className="grid gap-10">
            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-4 xl:grid-cols-auto-250 gap-8">
                {filteredUsers.map((user) => (
                  <CardProfiles
                    key={user.workId}
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
                ))}
              </div>
            ) : (
              <div className="h-24 flex items-center justify-center">
                <h3 className="text-center text-gray-500">
                  No se encontraron resultados para "{searchTerm}".
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}