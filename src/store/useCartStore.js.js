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

      incrementQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        }));
      },

      decrementQuantity: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          ),
        }));
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }));
      },
    }),
    {
      name: "cart",
      getStorage: () => localStorage, // Persist cart in localStorage
    },
  ),
);
