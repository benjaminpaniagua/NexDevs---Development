import CardCategories from "../ui/Cards/CardCategories";
import { useState } from "react";
import { Search_Input } from "../ui/Search_Input";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useNavigate } from "react-router-dom";
import { Loading_Screen } from '../ui/Loading_Screen.jsx'

const Categories_Page = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useFetchCategories();
  const [searchTerm, setSearchTerm] = useState("");

  const handleCardClick = (title) => {
    console.log(`Categoría seleccionada: ${title}`);
  };

  const handleSearch = (search) => {
    setSearchTerm(search.toLowerCase());
  };

  const filteredCategories = categories.filter((category) =>
    category.categoryName.toLowerCase().includes(searchTerm)
  );

  if (error) {
    navigate('/error503');
}

  return (
    <div className="flex flex-col gap-12 py-10 h-auto mx-auto px-20 max-w-[100rem] min-h-screen xs:px-7 md:px-10">
      

      {/* Loading Screen */}
      <Loading_Screen Loading={loading} />
      {/* Loading Screen */}
      <div className="flex sm:flex-col sm:gap-5 sm:mb-0 mt-12 md:mt-2 mb-4 items-center justify-between md:items-start">
        <h2 className="font-clash font-semibold text-4xl md:text-2xl">Categorías</h2>
        <div className="md:w-full">
        <Search_Input search={handleSearch} />
        </div>
      </div>
      {loading ? (
        <h3 className="text-center">Cargando Categorias...</h3>
      ) : (
        <div className="grid gap-10">
          {filteredCategories.length > 0 ? (
            <div className="grid grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-8 text-center">
              {filteredCategories.map((category) => (
                <CardCategories
                  key={category.categoryId}
                  title={category.categoryName}
                  imageUrl={category.categoryImageUrl}
                  onClick={() => handleCardClick(category.categoryName)}
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
  );
};

export default Categories_Page;