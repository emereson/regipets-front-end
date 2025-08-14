import { create } from "zustand";

interface CheckoutFormData {
  nombre_apellidos?: string;
  email?: string;
  dni?: string;
  celular?: string;
  direccion?: string;
  referencia?: string;
}

interface CheckoutStore {
  data: CheckoutFormData;
  setFormData: (formData: Partial<CheckoutFormData>) => void;
  clearForm: () => void;
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  data: {},
  setFormData: (formData) =>
    set((state) => ({ data: { ...state.data, ...formData } })),
  clearForm: () => set({ data: {} }),
}));
