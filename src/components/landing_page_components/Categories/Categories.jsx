import  { useState, useEffect } from "react";
import Card from "../../ui/Cards/CardCategories";
import { Link } from "react-router-dom";
import { SecondaryButtonOutline } from "../../ui/Buttons";
import { useFetchCategories } from "../../../hooks/useFetchCategories";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const navigate = useNavigate();
  const { categories, loading, error } = useFetchCategories();
  const [categoriesToShow, setCategoriesToShow] = useState(categories);

  useEffect(() => {
    const updateCategories = () => {
      if (window.innerWidth <= 768) {
        setCategoriesToShow(categories.slice(0, 4));
      } else {
        setCategoriesToShow(categories.slice(0, 8));
      }
    };

    updateCategories();
    window.addEventListener("resize", updateCategories);

    return () => window.removeEventListener("resize", updateCategories);
  }, [loading]);

  const handleCardClick = (title) => {
    navigate(`/profiles?category=${encodeURIComponent(title)}`);
};
  if (error) {
    navigate('/error503');
}

  return (
    <div className="mt-10 grid gap-12 mx-auto px-20 max-w-[100rem] md:flex-col md:p-4">
      <div className='h-auto flex flex-col gap-2 sm:gap-0 md:px-4'>
        <h2 className="text-4xl sm:text-fs-xlarge font-bold">Categorías Principales</h2>
        <div className='grid grid-cols-4 md:grid-cols-1 gap-12 md:gap-4 mt-3'>
          {categoriesToShow.map((category) => (
            <Card
            key={category.categoryId}
            title={category.categoryName}
            imageUrl={category.categoryImageUrl}
            onClick={() => handleCardClick(category.categoryName)}
            />
          ))}
        </div>
        <div className="flex justify-center mt-5 mb-10">
          <Link to="/categories">
            <SecondaryButtonOutline text="Ver Más" extraStyles={"px-16 py-4"}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;