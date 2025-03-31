/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useCart } from '@/lib/stores/cart-store';
import { urlFor } from '@/lib/utils';
import { Button } from './ui/button';
import Price from './Price';

import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface AddToCartButton {
  product: any;
  currentVariant: any;
  color?: string;
  size?: string;
  className?: string;
}

const AddToCartButton: React.FC<AddToCartButton> = ({ product, currentVariant, color, size, className }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    try {
      addItem({
      productId: product._id,
      variantId: currentVariant._id,
      name: product.name,
      priceUSD: currentVariant.priceUSD,
      priceBs: currentVariant.priceBs,
      quantity: 1,
      color,
      size,
      image: urlFor(currentVariant.images[0]).url()
      });

      toast.success(`${product.name} has been added to your cart!`);
    } catch (error) {
      toast.error('Failed to add the product to your cart. Please try again.');
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <Button 
      type="button"
      onClick={handleAddToCart}
      className={cn('flex justify-between py-8 w-full', className)}
    >
      <span className="font-bold text-2xl">
        <Price priceUSD={currentVariant.priceUSD} priceBs={currentVariant.priceBs} />
      </span>
      <span className="font-semibold text-xl text-right">
        Add to Cart
      </span>
    </Button>
  );
};

export default AddToCartButton;