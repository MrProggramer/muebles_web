import { Clock, Percent, Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useProductsOnSale } from '../hooks/useProducts';
import type { Product } from '../types/product';

const Offers = () => {
  const { addToCart, isInCart } = useCart();
  const { data: offers, loading, error } = useProductsOnSale();

  // Calcular descuento porcentaje
  const calculateDiscount = (precio: number, precioAnterior: number | null) => {
    if (!precioAnterior) return 0;
    return Math.round((1 - precio / precioAnterior) * 100);
  };

  // Estados de carga
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-xl">Cargando ofertas especiales...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20 bg-red-50 rounded-lg border border-red-200">
            <div className="text-red-500 text-xl mb-4 font-semibold">
              ❌ Error al cargar las ofertas
            </div>
            <p className="text-gray-600 mb-6">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Reintentar
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!offers || offers.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20 bg-white rounded-lg">
            <Percent className="w-20 h-20 text-gray-400 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No hay ofertas disponibles</h2>
            <p className="text-gray-600">¡Pronto tendremos nuevas ofertas para ti!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <Percent className="w-8 h-8 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-display">Ofertas Especiales</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Aprovecha nuestras increíbles ofertas por tiempo limitado. 
            Descuentos exclusivos en los mejores muebles.
          </p>
        </div>

        {/* Flash Sale Banner */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 mb-12 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">¡Flash Sale!</h2>
              <p className="text-lg opacity-90">Hasta {offers.length > 0 ? calculateDiscount(offers[0].precio, offers[0].precioAnterior) : 50}% de descuento en productos seleccionados</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="text-center">
                <div className="text-3xl font-bold">02</div>
                <div className="text-sm opacity-75">Días</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">14</div>
                <div className="text-sm opacity-75">Horas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">32</div>
                <div className="text-sm opacity-75">Min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer: Product) => {
            const descuento = calculateDiscount(offer.precio, offer.precioAnterior);
            
            return (
              <div key={offer.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
                <div className="relative overflow-hidden rounded-t-xl flex-shrink-0">
                  {/* Product Image */}
                  {offer.imagenes && offer.imagenes.length > 0 ? (
                    <img 
                      src={offer.imagenes[0]}
                      alt={offer.nombre}
                      className="w-full aspect-square object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-400">Sin imagen</span>
                    </div>
                  )}
                  
                  {/* Discount Badge */}
                  {descuento > 0 && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -{descuento}%
                      </span>
                    </div>
                  )}

                  {/* Time Left Badge */}
                  <div className="absolute top-3 right-3 bg-black bg-opacity-75 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>Limitado</span>
                  </div>

                  {/* Wishlist Button */}
                  <button className="absolute bottom-3 right-3 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category */}
                  <div className="mb-2">
                    <span className="text-sm text-blue-600 font-medium">{offer.categoria || '---'}</span>
                  </div>

                  {/* Product Name - Altura fija */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
                    {offer.nombre}
                  </h3>

                  {/* Descripcion - Altura fija */}
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
                    {offer.descripcion || '---'}
                  </p>

                  {/* Rating + Stock */}
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
                      {offer.stock > 0 ? `${offer.stock} disponibles` : 'Sin stock'}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          ${offer.precio.toLocaleString('es-AR')}
                        </span>
                        {offer.precioAnterior && (
                          <span className="text-lg text-gray-500 line-through">
                            ${offer.precioAnterior.toLocaleString('es-AR')}
                          </span>
                        )}
                      </div>
                      {offer.precioAnterior && (
                        <span className="text-sm font-semibold text-green-600">
                          Ahorras ${(offer.precioAnterior - offer.precio).toLocaleString('es-AR')}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Spacer para empujar el botón al final */}
                  <div className="flex-1"></div>

                  {/* Add to Cart Button - Siempre al final */}
                  <button 
                    onClick={() => addToCart(offer)}
                    disabled={offer.stock === 0}
                    className={`w-full font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 ${
                      offer.stock === 0
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : isInCart(offer.id) 
                          ? 'bg-green-600 hover:bg-green-700 text-white' 
                          : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>
                      {offer.stock === 0
                        ? 'Sin Stock'
                        : isInCart(offer.id) ? 'En el Carrito' : 'Agregar al Carrito'
                      }
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter for Offers */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿No quieres perderte ninguna oferta?</h2>
          <p className="text-lg opacity-90 mb-6">
            Suscríbete a nuestro newsletter y recibe las mejores ofertas directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
