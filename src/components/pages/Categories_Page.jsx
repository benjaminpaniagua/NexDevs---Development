import CardCategories from "../ui/Cards/CardCategories";
import SecondaryButton from "../ui/SecondaryButton";
import { useState, useEffect } from "react";
import { Search_Input } from "../ui/Search_Input";
import { useFetchCategories } from "../../hooks/useFetchCategories";

const Categories_Page = () => {
  const { categories, loading } = useFetchCategories();
  const [categoriesToShow, setCategoriesToShow] = useState(categories);

  return (
    <div className="h-auto mt-10 grid md:p-4 mx-auto max-w-[100rem] min-w-[10rem]">
      <div className="flex mt-20 mb-4 items-center justify-between">
        <h2 className="font-clash">Categorías</h2>
        <Search_Input />
      </div>
      {loading ? (
        <h3 className="text-center">Cargando categorias...</h3>
      ) : (
        <div className="grid gap-10">
          <div className="grid grid-cols-auto-300 sm:grid-cols-auto-250 md:grid-cols-auto-300 lg:grid-cols-auto-350 gap-4">
            {categories.map((category, index) => (
              <CardCategories
                key={category.categoryId}
                title={category.categoryName}
                imageUrl="/images/categories/aire-acondicionado.jpg"
                onClick={() => handleCardClick(category.categoryName)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Categories_Page;
