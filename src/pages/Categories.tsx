import { Sofa, Table, Bed, Monitor, Palette, TreePine, ArrowRight } from 'lucide-react';
import { categoryImages } from '../data/furnitureImages';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Sofás y Sillones",
      description: "Comodidad y elegancia para tu sala",
      productCount: 45,
      icon: Sofa,
      color: "from-blue-500 to-blue-600",
      image: "sofas"
    },
    {
      id: 2,
      name: "Mesas y Sillas",
      description: "Diseño funcional para tu comedor",
      productCount: 32,
      icon: Table,
      color: "from-green-500 to-green-600",
      image: "mesas"
    },
    {
      id: 3,
      name: "Dormitorio",
      description: "Descanso perfecto garantizado",
      productCount: 28,
      icon: Bed,
      color: "from-purple-500 to-purple-600",
      image: "dormitorio"
    },
    {
      id: 4,
      name: "Oficina",
      description: "Productividad y comodidad",
      productCount: 19,
      icon: Monitor,
      color: "from-orange-500 to-orange-600",
      image: "oficina"
    },
    {
      id: 5,
      name: "Decoración",
      description: "Detalles que marcan la diferencia",
      productCount: 67,
      icon: Palette,
      color: "from-pink-500 to-pink-600",
      image: "decoracion"
    },
    {
      id: 6,
      name: "Exterior",
      description: "Disfruta de tus espacios al aire libre",
      productCount: 23,
      icon: TreePine,
      color: "from-emerald-500 to-emerald-600",
      image: "exterior"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">Nuestras Categorías</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora nuestra amplia gama de muebles organizados por categorías. 
            Encuentra exactamente lo que necesitas para cada espacio de tu hogar.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const categoryImage = categoryImages[category.image as keyof typeof categoryImages] || categoryImages.sofas;
            
            return (
              <div key={category.id} className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                  <button className="w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 group-hover:shadow-lg flex items-center justify-center space-x-2">
                    <span>Ver Categoría</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Categories */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Categorías Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group">
              <img
                src={categoryImages.sofas}
                alt="Sofás Premium"
                className="w-full h-32 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <Sofa className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sofás Premium</h3>
                <p className="text-gray-600 text-sm text-center">La mejor selección de sofás para tu hogar</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-green-100 group">
              <img
                src={categoryImages.mesas}
                alt="Mesas de Comedor"
                className="w-full h-32 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <Table className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mesas de Comedor</h3>
                <p className="text-gray-600 text-sm text-center">Perfectas para reuniones familiares</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 group">
              <img
                src={categoryImages.dormitorio}
                alt="Dormitorio Completo"
                className="w-full h-32 object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <Bed className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dormitorio Completo</h3>
                <p className="text-gray-600 text-sm text-center">Todo lo que necesitas para descansar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
