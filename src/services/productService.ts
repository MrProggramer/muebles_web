import axios from 'axios';

// Base URL del backend desde .env
const API_URL = import.meta.env.VITE_API_URL;

console.log('🔧 Backend URL:', API_URL);

/**
 * Servicio simple para productos usando UN SOLO endpoint con filtros
 */
export const productService = {
  getAllProducts: async () => {
    const resp = await axios.get(`${API_URL}/api/productos`);
    return resp.data.data;
  },

  getFeaturedProducts: async () => {
    const resp = await axios.get(`${API_URL}/api/productos`, {
      params: { destacado: true }
    });
    return resp.data.data;
  },

  getProductsOnSale: async () => {
    const resp = await axios.get(`${API_URL}/api/productos`, {
      params: { enOferta: true }
    });
    return resp.data.data;
  },

  getNewProducts: async () => {
    const resp = await axios.get(`${API_URL}/api/productos`, {
      params: { nuevo: true }
    });
    return resp.data.data;
  },

  getProductById: async (id: string) => {
    const resp = await axios.get(`${API_URL}/api/productos/${id}`);
    return resp.data.data;
  },

  getCategories: async () => {
    const resp = await axios.get(`${API_URL}/api/categorias`);
    return resp.data.data;
  },

  getProductsByCategory: async (category: string) => {
    const resp = await axios.get(`${API_URL}/api/productos`, {
      params: { categoria: category }
    });
    return resp.data.data;
  },

  searchProducts: async (query: string) => {
    const resp = await axios.get(`${API_URL}/api/productos`, {
      params: { search: query }
    });
    return resp.data.data;
  },
};

export default productService;
