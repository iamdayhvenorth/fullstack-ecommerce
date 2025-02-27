import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createJSONStorage, persist, devtools } from "zustand/middleware";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  initialPrice?: number;
  image: string;
};

type Actions = {
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

type CartState = {
  products: CartItem[];
  total: number;
};

export const useCartStore = create<CartState & Actions>()(
  devtools(
    persist(
      immer((set) => ({
        products: [],
        total: 0,
        addToCart: (item) =>
          set((state) => {
            const existingItem = state.products.find(
              (prod) => prod.id === item.id
            );
            if (existingItem) {
              existingItem.quantity += item.quantity;
            } else {
              state.products.push(item);
            }

            state.total = state.products
              .map((x) => x.quantity * x.price)
              .reduce((x, y) => x + y);
          }),

        removeFromCart: (id: number) =>
          set((state) => {
            state.products = state.products.filter((x) => x.id !== id);
            if (state.products.length > 0) {
              state.total = state.products
                .map((x) => x.quantity * x.price)
                .reduce((x, y) => x + y);
            }
          }),

        clearCart: () =>
          set((state) => {
            state.products = [];
            state.total = 0;
          }),

        increaseQty: (id) =>
          set((state) => {
            const existingItem = state.products.find((prod) => prod.id === id);
            if (existingItem) {
              existingItem.quantity += 1;
            }
            state.total = state.products
              .map((x) => x.quantity * x.price)
              .reduce((x, y) => x + y);
          }),

        decreaseQty: (id) =>
          set((state) => {
            const existingItem = state.products.find((prod) => prod.id === id);
            if (existingItem) {
              existingItem.quantity -= 1;
              if (existingItem.quantity < 1) {
                state.products = state.products.filter((x) => x.id !== id);
              }
            }
            if (state.products.length > 0) {
              state.total = state.products
                .map((x) => x.quantity * x.price)
                .reduce((x, y) => x + y);
            }
          }),
      })),
      {
        name: "cart-storage",
        version: 1,
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({
          products: state.products,
        }),
      }
    ),
    {
      enabled: true,
      name: "cart",
    }
  )
);
