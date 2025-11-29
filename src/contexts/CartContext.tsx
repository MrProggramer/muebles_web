import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { CartItem, CartContextType, CartAction } from '../types/cart';
import type { Product } from '../types/product';
import { CART_CONFIG } from '../types/cart';

// Estado inicial del carrito
const initialState = {
  items: [] as CartItem[],
  totalItems: 0,
  totalPrice: 0,
  isOpen: false,
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state: typeof initialState, action: CartAction) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity, options } = action.payload;
      const existingItem = state.items.find(item => 
        item.product.id === product.id && 
        item.size === options?.size && 
        item.color === options?.color
      );

      let newItems: CartItem[];
      
      if (existingItem) {
        // Si el producto ya existe, actualizar cantidad
        newItems = state.items.map(item =>
          item.id === existingItem.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, CART_CONFIG.MAX_QUANTITY) }
            : item
        );
      } else {
        // Si es un producto nuevo, agregarlo
        const newItem: CartItem = {
          id: Date.now() + Math.random(), // ID único temporal
          product,
          quantity: Math.min(quantity, CART_CONFIG.MAX_QUANTITY),
          size: options?.size,
          color: options?.color,
          notes: options?.notes,
        };
        newItems = [...state.items, newItem];
      }

      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.product.precio * item.quantity), 0),
      };
    }

    case 'REMOVE_FROM_CART': {
      const newItems = state.items.filter(item => item.id !== action.payload.itemId);
      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.product.precio * item.quantity), 0),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { itemId, quantity } = action.payload;
      const newQuantity = Math.max(CART_CONFIG.MIN_QUANTITY, Math.min(quantity, CART_CONFIG.MAX_QUANTITY));
      
      const newItems = state.items.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );

      return {
        ...state,
        items: newItems,
        totalItems: newItems.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: newItems.reduce((sum, item) => sum + (item.product.precio * item.quantity), 0),
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0,
      };

    case 'TOGGLE_CART':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};

// Crear el contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider del carrito
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cargar carrito desde localStorage al inicializar
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_CONFIG.STORAGE_KEY);
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart.items && Array.isArray(parsedCart.items)) {
          // Restaurar items del carrito
          parsedCart.items.forEach((item: CartItem) => {
            dispatch({
              type: 'ADD_TO_CART',
              payload: {
                product: item.product,
                quantity: item.quantity,
                options: {
                  size: item.size,
                  color: item.color,
                  notes: item.notes,
                },
              },
            });
          });
        }
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem(CART_CONFIG.STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Funciones del carrito
  const addToCart = (
    product: Product, 
    quantity: number = 1, 
    options?: { size?: string; color?: string; notes?: string }
  ) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { product, quantity, options },
    });
  };

  const removeFromCart = (itemId: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { itemId },
    });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { itemId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const toggleCart = () => {
    dispatch({ type: 'TOGGLE_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  // Funciones de utilidad
  const getItemQuantity = (productId: string): number => {
    const item = state.items.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  };

  const isInCart = (productId: string): boolean => {
    return state.items.some(item => item.product.id === productId);
  };

  const getCartItem = (productId: string): CartItem | undefined => {
    return state.items.find(item => item.product.id === productId);
  };

  const contextValue: CartContextType = {
    // Estado
    items: state.items,
    totalItems: state.totalItems,
    totalPrice: state.totalPrice,
    isOpen: state.isOpen,
    
    // Funciones
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    
    // Utilidades
    getItemQuantity,
    isInCart,
    getCartItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};
