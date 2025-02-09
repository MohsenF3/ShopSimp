import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (id, fields) => {
        set((state) => {
          const existingProductIndex = state.cart.findIndex(
            (item) => item.id === id,
          );

          if (existingProductIndex !== -1) {
            return {
              cart: state.cart.map((item) =>
                item.id === id ? { ...item, quantity: fields.quantity } : item,
              ),
            };
          } else {
            return {
              cart: [...state.cart, { id, ...fields }],
            };
          }
        });
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart",
      getStorage: () => localStorage,
    },
  ),
);
