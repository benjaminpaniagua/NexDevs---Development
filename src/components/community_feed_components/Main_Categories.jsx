import '../../index.css'
import { useState, useEffect } from "react";
import Card from "../ui/Cards/CardCategories";
import { SecondaryButtonOutline } from '../ui/Buttons'
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useNavigate } from 'react-router-dom';

export function Main_Categories() {
    const navigate = useNavigate();
    const { categories, loading } = useFetchCategories();
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
        console.log(`Categoría seleccionada: ${title}`);
    };

    return (
        <>
            <div className='h-auto flex flex-col gap-2 sm:gap-0'>
                <h2 className="font-clash sm:text-center">Categorías Principales</h2>

                {loading ? (
                    <div>
                        <h3 className="text-center">Cargando categorias...</h3>
                    </div>
                ) :
                    (
                        <div>
                            <div className={`grid grid-cols-4 md:grid-cols-1 gap-12 md:gap-4`}>
                                {categoriesToShow.map((category) => (
                                    <Card
                                        key={category.categoryId}
                                        title={category.categoryName}
                                        imageUrl="/images/categories/aire-acondicionado.jpg"
                                        onClick={() => handleCardClick(category.categoryName)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                <div className='flex justify-center'>
                    <SecondaryButtonOutline text="Ver Más" extraStyles={"px-16 py-2 mt-5"} onClick={() => navigate('/Categories')}/>
                </div>
            </div>
        </>
    );
}