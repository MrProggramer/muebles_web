
import { Sofa, Table, Bed, Monitor, Palette, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categoryImages } from '../data/furnitureImages';

interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
  description: string;
}

const Categories: React.FC = () => {
  const categoryIcons = {
    sofas: Sofa,
    mesas: Table,
    dormitorio: Bed,
    oficina: Monitor,
    decoracion: Palette,
    exterior: TreePine
  };

  const categories: Category[] = [
    {
      id: 1,
      name: "Sofás y Sillones",
      image: "sofas",
      productCount: 45,
      description: "Comodidad y elegancia para tu sala"
    },
    {
      id: 2,
      name: "Mesas y Sillas",
      image: "mesas",
      productCount: 32,
      description: "Diseño funcional para tu comedor"
    },
    {
      id: 3,
      name: "Dormitorio",
      image: "dormitorio",
      productCount: 28,
      description: "Descanso perfecto garantizado"
    },
    {
      id: 4,
      name: "Oficina",
      image: "oficina",
      productCount: 19,
      description: "Productividad y comodidad"
    },
    {
      id: 5,
      name: "Decoración",
      image: "decoracion",
      productCount: 67,
      description: "Detalles que marcan la diferencia"
    },
    {
      id: 6,
      name: "Exterior",
      image: "exterior",
      productCount: 23,
      description: "Disfruta de tus espacios al aire libre"
    }
  ];

  const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
    const IconComponent = categoryIcons[category.image as keyof typeof categoryIcons] || Sofa;
    const categoryImage = categoryImages[category.image as keyof typeof categoryImages] || categoryImages.sofas;
    
    return (
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        {/* Category Image */}
        <div className="aspect-square relative overflow-hidden">
          <img
            src={categoryImage}
            alt={category.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay with Icon */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white group-hover:scale-110 transition-transform duration-300">
              <IconComponent className="w-20 h-20 mx-auto mb-3" />
              <p className="text-lg font-semibold">{category.name}</p>
            </div>
          </div>
          
          {/* Product Count Badge */}
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
          {category.productCount} productos
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {category.description}
        </p>
        <Link 
          to="/categorias"
          className="block w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 group-hover:shadow-lg text-center"
        >
          Ver Categoría
        </Link>
      </div>
    </div>
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de muebles organizados por categorías. 
            Encuentra exactamente lo que necesitas para cada espacio de tu hogar.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link 
            to="/categorias"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          >
            Ver Todas las Categorías
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
