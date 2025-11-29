// Tipos que coinciden EXACTAMENTE con el backend
export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioAnterior: number | null;
  categoria: string;
  subcategoria: string | null;
  marca: string | null;
  material: string | null;
  color: string | null;
  dimensiones: string | null;
  peso: number | null;
  stock: number;
  imagenes: string[];
  destacado: boolean;
  enOferta: boolean;
  nuevo: boolean;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  nombre: string;
  descripcion: string;
  icono: string;
  cantidadProductos: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface ApiError {
  success: false;
  error: string;
}

