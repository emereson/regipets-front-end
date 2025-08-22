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

// Información de delivery
interface DeliveryInfo {
  departamento: string;
  provincia: string;
  distrito: string;
  cost: number;
}

// Actualizamos la "forma" de nuestro store
interface CartState {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
  deliveryCost: number;
  deliveryInfo: DeliveryInfo | null;
  finalTotal: number; // Total + delivery
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  setDeliveryInfo: (info: DeliveryInfo) => void;
  clearDeliveryInfo: () => void;
  clearCart: () => void;
  getFinalTotal: () => number;
}

// Función helper para calcular el total final
const calculateFinalTotal = (
  totalPrice: number,
  deliveryCost: number
): number => {
  return totalPrice + deliveryCost;
};

// Creamos el store con la nueva lógica de cantidades y delivery
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // --- ESTADO INICIAL ---
      cart: [],
      totalItems: 0,
      totalPrice: 0,
      deliveryCost: 0,
      deliveryInfo: null,
      finalTotal: 0,

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
          const newTotalPrice = get().totalPrice + productToAdd.precio;
          const newFinalTotal = calculateFinalTotal(
            newTotalPrice,
            get().deliveryCost
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: newTotalPrice,
            finalTotal: newFinalTotal,
          }));
        } else {
          // Si es un producto nuevo, lo agregamos con cantidad 1
          const newTotalPrice = get().totalPrice + productToAdd.precio;
          const newFinalTotal = calculateFinalTotal(
            newTotalPrice,
            get().deliveryCost
          );

          set((state) => ({
            cart: [...state.cart, { ...productToAdd, quantity: 1 }],
            totalItems: state.totalItems + 1,
            totalPrice: newTotalPrice,
            finalTotal: newFinalTotal,
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

        const newTotalPrice = get().totalPrice + productToIncrease.precio;
        const newFinalTotal = calculateFinalTotal(
          newTotalPrice,
          get().deliveryCost
        );

        set((state) => ({
          cart: updatedCart,
          totalItems: state.totalItems + 1,
          totalPrice: newTotalPrice,
          finalTotal: newFinalTotal,
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
          const newTotalPrice = get().totalPrice - productToDecrease.precio;
          const newFinalTotal = calculateFinalTotal(
            newTotalPrice,
            get().deliveryCost
          );

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: newTotalPrice,
            finalTotal: newFinalTotal,
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

        const newTotalPrice =
          get().totalPrice - productToRemove.precio * productToRemove.quantity;
        const newFinalTotal = calculateFinalTotal(
          newTotalPrice,
          get().deliveryCost
        );

        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
          totalItems: state.totalItems - productToRemove.quantity,
          totalPrice: newTotalPrice,
          finalTotal: newFinalTotal,
        }));
      },

      // Nueva función para establecer información de delivery
      setDeliveryInfo: (info: DeliveryInfo) => {
        const newFinalTotal = calculateFinalTotal(get().totalPrice, info.cost);

        set({
          deliveryInfo: info,
          deliveryCost: info.cost,
          finalTotal: newFinalTotal,
        });
      },

      // Función para limpiar información de delivery
      clearDeliveryInfo: () => {
        const newFinalTotal = calculateFinalTotal(get().totalPrice, 0);

        set({
          deliveryInfo: null,
          deliveryCost: 0,
          finalTotal: newFinalTotal,
        });
      },

      clearCart: () => {
        set({
          cart: [],
          totalItems: 0,
          totalPrice: 0,
          finalTotal: get().deliveryCost, // Mantener solo el costo de delivery
        });
      },

      // Función helper para obtener el total final
      getFinalTotal: () => {
        return get().totalPrice + get().deliveryCost;
      },
    }),
    {
      name: "regipets-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Exportamos también las interfaces para que puedas usarlas en otros archivos
export type { Product, CartItem, DeliveryInfo };
