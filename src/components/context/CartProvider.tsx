// components/cart-provider.tsx
'use client';

import { useEffect } from 'react';
import { useCart } from '@/lib/stores/cart-store';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { items } = useCart();

  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, [items]);

  return <>{children}</>;
}