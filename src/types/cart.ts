// Tipos e interfaces para el carrito de compras
import type { Product } from './product';

export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
  notes?: string;
}

export interface CartContextType {
  // Estado del carrito
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  
  // Funciones del carrito
  addToCart: (product: Product, quantity?: number, options?: { size?: string; color?: string; notes?: string }) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  closeCart: () => void;
  
  // Funciones de utilidad
  getItemQuantity: (productId: string) => number;
  isInCart: (productId: string) => boolean;
  getCartItem: (productId: string) => CartItem | undefined;
}

// Tipos para las acciones del carrito
export type CartAction = 
  | { type: 'ADD_TO_CART'; payload: { product: Product; quantity: number; options?: { size?: string; color?: string; notes?: string } } }
  | { type: 'REMOVE_FROM_CART'; payload: { itemId: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { itemId: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'TOGGLE_CART' }
  | { type: 'CLOSE_CART' };

// Configuración del carrito
export const CART_CONFIG = {
  MAX_QUANTITY: 10,
  MIN_QUANTITY: 1,
  STORAGE_KEY: 'mueblespro_cart',
  ANIMATION_DURATION: 300,
} as const;
