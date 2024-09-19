import '../../index.css'
import { useState, useEffect } from "react";
import Card from "../ui/Cards/CardCategories";
import { SecondaryButtonOutline } from '../ui/Buttons'
import { useFetchCategories } from "../../hooks/useFetchCategories";

export function Main_Categories() {
    const categories = useFetchCategories();

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
    }, []);

    const handleCardClick = (title) => {
        console.log(`Categoría seleccionada: ${title}`);
    };

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0'>
                <h2 className="font-clash sm:text-center">Categorías Principales</h2>
                <div className='grid grid-cols-4 md:grid-cols-1 gap-12 md:gap-4'>
                    {categoriesToShow.map((category, index) => (
                        <Card
                            key={index}
                            title={category.title}
                            imageUrl={category.imageUrl}
                            onClick={() => handleCardClick(category.title)}
                        />
                    ))}
                </div>
                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver Más" extraStyles={"px-16 mt-5"} />
                </div>
            </div>
        </>
    );
}