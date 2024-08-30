import Card from "../../ui/Categories/CardCategories";
import SecondaryButton from "../../ui/SecondaryButton";

const categories = [
  {
    title: "Aire Acondicionado",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Mecánica Automotriz",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Jardinería",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Fotografía",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Limpieza",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Cocina",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Repartidor",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
  {
    title: "Plomero",
    imageUrl: "/images/categories/aire-acondicionado.jpg",
  },
];

const Categories = () => {
  const handleCardClick = (title) => {
    console.log(`Categoría seleccionada: ${title}`);
  };

  return (
    <div className="mt-10 grid gap-12 p-4">
      <h2 className="font-clashDisplay">Categorías Principales</h2>
      <div className="grid gap-10">
        <div className="grid grid-cols-auto-300 sm:grid-cols-auto-250 md:grid-cols-auto-300 lg:grid-cols-auto-350 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
              onClick={handleCardClick}
            />
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <SecondaryButton text="Ver Más" sizeX="S" sizeY="S" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
