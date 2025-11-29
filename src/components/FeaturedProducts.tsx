import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useFeaturedProducts } from '../hooks/useProducts';
import type { Product } from '../types/product';

const FeaturedProducts: React.FC = () => {
  const { data: products, loading, error } = useFeaturedProducts();

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart, isInCart } = useCart();
    
    const handleAddToCart = () => {
      addToCart(product);
    };

    // Calcular descuento si existe precio anterior
    const calcularDescuento = () => {
      if (!product.precioAnterior) return null;
      return Math.round((1 - product.precio / product.precioAnterior) * 100);
    };

    const descuento = calcularDescuento();

    return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
      <div className="relative overflow-hidden rounded-t-xl">
        {/* Product Image - Usamos la primera imagen del array */}
        {product.imagenes && product.imagenes.length > 0 ? (
          <img 
            src={product.imagenes[0]}
            alt={product.nombre}
            className="w-full aspect-square object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Sin imagen</span>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.nuevo && (
            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              NUEVO
            </span>
          )}
          {product.enOferta && descuento && (
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              -{descuento}%
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Categoria */}
        <div className="mb-2">
          <span className="text-sm text-blue-600 font-medium">
            {product.categoria || '---'}
          </span>
        </div>

        {/* Product Name - Altura fija */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.nombre}
        </h3>

        {/* Descripcion corta - Altura fija */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
          {product.descripcion || '---'}
        </p>

        {/* Rating simulado + Stock */}
        <div className="flex items-center mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">
            {product.stock > 0 ? `${product.stock} disponibles` : 'Sin stock'}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.precio.toLocaleString('es-AR')}
            </span>
            {product.precioAnterior && (
              <span className="text-lg text-gray-500 line-through">
                ${product.precioAnterior.toLocaleString('es-AR')}
              </span>
            )}
          </div>
        </div>

        {/* Spacer para empujar el botón al final */}
        <div className="flex-1"></div>

        {/* Add to Cart Button - Siempre al final */}
        <button 
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
            product.stock === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : isInCart(product.id) 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          <span>
            {product.stock === 0 
              ? 'Sin Stock' 
              : isInCart(product.id) 
                ? 'En el Carrito' 
                : 'Agregar al Carrito'
            }
          </span>
        </button>
      </div>
    </div>
    );
  };

  // Estados de carga y error
  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
              Productos Destacados
            </h2>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600 text-lg">Cargando productos destacados...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-500 text-lg mb-4 font-semibold">
              ❌ Error al cargar productos destacados
            </div>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!products || products.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">📦 No hay productos destacados disponibles</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
            Productos Destacados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra selección de muebles más populares, cuidadosamente 
            elegidos por su calidad y diseño excepcional.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-all duration-200 hover:shadow-lg">
            Ver Todos los Productos
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
