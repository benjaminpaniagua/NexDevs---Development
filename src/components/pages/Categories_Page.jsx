import CardCategories from "../ui/Cards/CardCategories";
import SecondaryButton from "../ui/SecondaryButton";
import { useState, useEffect } from "react";
import { Search_Input } from "../ui/Search_Input";

const categories = [
  {
    title: "Category 1",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 2",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 3",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 4",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 5",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 6",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 7",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 8",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 9",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 10",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 11",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 12",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 13",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 14",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Category 15",
    imageUrl: "./images/categories/aire-acondicionado.jpg",
  },
];

const Categories_Page = () => {
  const [categoriesToShow, setCategoriesToShow] = useState(categories);

  useEffect(() => {
    const updateCategories = () => {
      if (window.innerWidth <= 768) {
        setCategoriesToShow(categories);
      } else {
        setCategoriesToShow(categories);
      }
    };

    updateCategories();
    window.addEventListener("resize", updateCategories);

    return () => window.removeEventListener("resize", updateCategories);
  }, []);

  const handleCardClick = (title) => {
    console.log(`Categoría seleccionada: ${title}`);
  };

  return (
    <div className="mt-10 grid md:p-4 mx-auto max-w-[100rem] min-w-[10rem]">
      <div className="flex mt-20 mb-4 items-center justify-between">
        <h2 className="font-clash">Categorías</h2>
        <Search_Input />
      </div>
      <div className="grid gap-10">
        <div className="grid grid-cols-auto-300 sm:grid-cols-auto-250 md:grid-cols-auto-300 lg:grid-cols-auto-350 gap-4">
          {categoriesToShow.map((category, index) => (
            <CardCategories
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
              onClick={() => handleCardClick(category.title)}
            />
          ))}
        </div>
        {/* <div className="flex justify-center mb-10">
          <SecondaryButton text="Ver Más" sizeX="S" sizeY="S" />
        </div> */}
      </div>
    </div>
  );
};

export default Categories_Page;
