// lib/stores/cart-store.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type CartItem = {
  productId: string;
  variantId: string;
  quantity: number;
  priceUSD: number;
  priceBs: number;
  name: string;
  color?: string;
  size?: string;
  image: string;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => {
        const existingItem = state.items.find(i => i.variantId === item.variantId);
        if (existingItem) {
          return {
            items: state.items.map(i => 
              i.variantId === item.variantId 
                ? { ...i, quantity: i.quantity + item.quantity } 
                : i
            )
          };
        }
        return { items: [...state.items, item] };
      }),
      removeItem: (variantId) => 
        set((state) => ({
          items: state.items.filter(i => i.variantId !== variantId)
        })),
      updateQuantity: (variantId, quantity) => 
        set((state) => ({
          items: state.items.map(i => 
            i.variantId === variantId ? { ...i, quantity } : i
          )
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);