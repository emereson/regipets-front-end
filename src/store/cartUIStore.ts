// stores/cartUIStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartUIState {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
}

export const useCartUIStore = create<CartUIState>()(
  persist(
    (set) => ({
      isOpen: false,
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "shopping-cart-ui",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
