'use client';

import { useCart } from '@/lib/stores/cart-store';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useSettings } from '@/components/context/SettingsContext';
import { getWhatsAppUrl } from '@/lib/utils';
import Link from 'next/link';

export default function CartPage() {
  const settings = useSettings(); 

  const { items, removeItem, updateQuantity, clearCart } = useCart();
  const total = items.reduce((sum, item) => sum + (item.priceUSD * item.quantity), 0);



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.variantId} className="flex items-center gap-6 border-b pb-4">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  {item.color && `Color: ${item.color}`}
                  {item.size && ` • Size: ${item.size}`}
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.variantId, Number(e.target.value))}
                    className="w-20 px-2 py-1 border rounded"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.variantId)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ${(item.priceUSD * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}

          <div className="text-right text-xl font-bold">
            Total: ${total.toFixed(2)}
          </div>

          <div className="flex justify-end gap-4">
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            
            <Link
              href={getWhatsAppUrl(
                items.map((item) => ({
                  product: { name: item.name },
                  variants: [
                    {
                      name: item.name,
                      color: item.color,
                      size: item.size,
                      sku: item.variantId,
                      priceUSD: item.priceUSD,
                    },
                  ],
                })),
                settings.whatsAppNumber ?? '',
                settings.currency ?? 'USD'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button >Checkout</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}