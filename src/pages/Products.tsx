import { useState, useMemo } from 'react';
import { Grid, List, Search, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useProducts, useCategories } from '../hooks/useProducts';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart, isInCart } = useCart();

  // Obtener datos del backend
  const { data: productsData, loading, error } = useProducts();
  const { data: categoriesData } = useCategories();

  const ITEMS_PER_PAGE = 20;

  // Categorías disponibles para filtros (desde el backend)
  const categories = useMemo(() => {
    if (categoriesData && categoriesData.length > 0) {
      return [
        { value: 'all', label: 'Todas las categorías' },
        ...categoriesData.map(cat => ({
          value: cat.nombre,
          label: cat.nombre
        }))
      ];
    }
    return [{ value: 'all', label: 'Todas las categorías' }];
  }, [categoriesData]);

  const products = productsData || [];

  // Filtrar y ordenar productos
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.categoria === selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.nombre.toLowerCase().includes(query) ||
        product.descripcion?.toLowerCase().includes(query) ||
        product.categoria.toLowerCase().includes(query)
      );
    }

    // Ordenar productos
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.precio - b.precio);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.precio - a.precio);
        break;
      case 'newest':
        filtered = [...filtered].filter(p => p.nuevo);
        break;
      case 'sale':
        filtered = [...filtered].filter(p => p.enOferta);
        break;
      default:
        // featured - destacados primero
        filtered = [...filtered].sort((a, b) => {
          if (a.destacado && !b.destacado) return -1;
          if (!a.destacado && b.destacado) return 1;
          return 0;
        });
        break;
    }

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  // Calcular paginación
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Resetear página cuando cambien los filtros
  const resetPage = () => setCurrentPage(1);

  // Calcular descuento
  const calcularDescuento = (precio: number, precioAnterior: number | null) => {
    if (!precioAnterior) return null;
    return Math.round((1 - precio / precioAnterior) * 100);
  };

  // Estados de carga y error
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center py-32">
            <div className="text-center">
              <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-blue-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-xl">Cargando productos...</p>
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
              ❌ Error al cargar los productos
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2 font-display">Todos los Productos</h1>
          <p className="text-gray-600">Descubre nuestra amplia colección de muebles de calidad</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col xl:flex-row xl:items-center gap-6">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    resetPage();
                  }}
                  className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex-1 min-w-0">
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => {
                      setSelectedCategory(category.value);
                      resetPage();
                    }}
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category.value
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-sm"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    resetPage();
                  }}
                  className="appearance-none px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium bg-white cursor-pointer"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-low">Precio: Menor a Mayor</option>
                  <option value="price-high">Precio: Mayor a Menor</option>
                  <option value="newest">Más Recientes</option>
                  <option value="sale">En Oferta</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-gray-600">
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length} productos
            {selectedCategory !== 'all' && ` en ${selectedCategory}`}
            {searchQuery && ` para "${searchQuery}"`}
            {totalPages > 1 && ` (Página ${currentPage} de ${totalPages})`}
          </p>
        </div>

        {/* Products Grid */}
        {paginatedProducts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg">
            <div className="text-gray-400 mb-4">
              <Search className="w-20 h-20 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
            <p className="text-gray-600 mb-6">
              {searchQuery 
                ? `No hay productos que coincidan con "${searchQuery}"`
                : `No hay productos en la categoría ${selectedCategory}`
              }
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {paginatedProducts.map((product) => (
            <div key={product.id} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              viewMode === 'list' ? 'flex' : 'flex flex-col h-full'
            }`}>
              {/* Product Image */}
              <div className={`${viewMode === 'list' ? 'w-48' : 'aspect-square'} relative overflow-hidden rounded-t-xl flex-shrink-0`}>
                {product.imagenes && product.imagenes.length > 0 ? (
                  <img 
                    src={product.imagenes[0]}
                    alt={product.nombre}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
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
                  {product.enOferta && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      OFERTA
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'flex-1' : 'flex-1'}`}>
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">{product.categoria}</span>
                </div>
                
                <h3 className={`text-lg font-semibold text-gray-900 mb-2 ${viewMode === 'grid' ? 'line-clamp-2 min-h-[3.5rem]' : ''}`}>
                  {product.nombre}
                </h3>

                <p className={`text-sm text-gray-600 mb-3 ${viewMode === 'grid' ? 'line-clamp-2 min-h-[2.5rem]' : 'line-clamp-3'}`}>
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
                  {product.precioAnterior && calcularDescuento(product.precio, product.precioAnterior) && (
                    <span className="text-sm font-semibold text-red-600">
                      -{calcularDescuento(product.precio, product.precioAnterior)}%
                    </span>
                  )}
                </div>

                {/* Spacer para empujar el botón al final en vista grid */}
                {viewMode === 'grid' && <div className="flex-1"></div>}

                {/* Add to Cart Button */}
                <button 
                  onClick={() => addToCart(product)}
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
                      : isInCart(product.id) ? 'En el Carrito' : 'Agregar al Carrito'
                    }
                  </span>
                </button>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              {/* Botón Anterior */}
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Anterior
              </button>

              {/* Números de página */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                // Mostrar solo páginas cercanas a la actual
                const showPage = 
                  page === 1 || 
                  page === totalPages || 
                  (page >= currentPage - 1 && page <= currentPage + 1);

                if (!showPage) {
                  // Mostrar puntos suspensivos
                  if (page === currentPage - 2 || page === currentPage + 2) {
                    return (
                      <span key={page} className="px-2 py-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              {/* Botón Siguiente */}
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                Siguiente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
