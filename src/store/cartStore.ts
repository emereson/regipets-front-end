import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Definimos la interfaz del producto basado en tu estructura de datos
interface Product {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  items: string[];
  mas_imagenes: {
    id: number;
    ruta_imagen: string;
  }[];
}

// Definimos un nuevo tipo para los items del carrito que incluye la cantidad
interface CartItem extends Product {
  quantity: number;
}

// Actualizamos la "forma" de nuestro store
interface CartState {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

// Creamos el store con la nueva lógica de cantidades
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // --- ESTADO INICIAL ---
      cart: [],
      totalItems: 0,
      totalPrice: 0,

      // --- ACCIONES ---
      addToCart: (productToAdd: Product) => {
        const cart = get().cart;
        const productInCart = cart.find((item) => item.id === productToAdd.id);

        if (productInCart) {
          // Si el producto ya existe, incrementamos su cantidad
          const updatedCart = cart.map((item) =>
            item.id === productToAdd.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + productToAdd.precio,
          }));
        } else {
          // Si es un producto nuevo, lo agregamos con cantidad 1
          set((state) => ({
            cart: [...state.cart, { ...productToAdd, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + productToAdd.precio,
          }));
        }
      },

      increaseQuantity: (productId: number) => {
        const cart = get().cart;
        const productToIncrease = cart.find((item) => item.id === productId);

        if (!productToIncrease) return;

        const updatedCart = cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + productToIncrease.precio,
        }));
      },

      decreaseQuantity: (productId: number) => {
        const cart = get().cart;
        const productToDecrease = cart.find((item) => item.id === productId);

        if (!productToDecrease) return;

        // Si la cantidad es mayor a 1, solo la decrementamos
        if (productToDecrease.quantity > 1) {
          const updatedCart = cart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice - productToDecrease.precio,
          }));
        } else {
          // Si la cantidad es 1, eliminamos el producto del carrito
          get().removeFromCart(productId);
        }
      },

      removeFromCart: (productId: number) => {
        const productToRemove = get().cart.find(
          (item) => item.id === productId
        );
        if (!productToRemove) return;

        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
          totalItems: state.totalItems - productToRemove.quantity,
          totalPrice:
            state.totalPrice -
            productToRemove.precio * productToRemove.quantity,
        }));
      },

      clearCart: () => {
        set({
          cart: [],
          totalItems: 0,
          totalPrice: 0,
        });
      },
    }),
    {
      name: "regipets-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Exportamos también la interfaz Product para que puedas usarla en otros archivos
export type { Product, CartItem };
