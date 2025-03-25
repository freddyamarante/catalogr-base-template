'use client'

import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

import { useSettings } from "./context/SettingsContext";
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    _id: string | null;
    name: string | null;
    description: string | null;
    material: string | null;
    slug?: {
      current: string | null;
    } | null;
    careInstructions: string | null;
    variants?: {
      _id: string;
      size: string | null;
      color: string | null;
      sku: string | null;
      priceUSD: number | null;
      priceBs: number | null;
      images?: {
        _key: string;
        asset?: {
          url?: string | null;
          dimensions?: string | null;
        } | null;
        _type: string;
      }[] | null;
    }[] | null;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const settings = useSettings()

  return (
    <Link href={`/productos/${product?.slug?.current}`} className='relative flex flex-col gap-4 max-w-full h-auto'>
      <div className='relative'>
        {product.variants?.[0]?.images?.[0] && (
          <Image
            className={cn('object-cover rounded-xl aspect-[9/10]',)}
            src={urlFor(product.variants[0].images[0])
              .width(700)
              .height(800)
              .quality(80)
              .auto("format")
              .url() || ""}
            alt={`${product.name} image.` || "Product image"}
            width={700}
            height={800}
            loading={product.variants[0].images[0] ? "eager" : "lazy"}
          />
        )}
        <Button size="icon" className='absolute right-8 -bottom-6 lg:-bottom-10 size-12 lg:size-20'>
          <PlusIcon className='w-64 h-64' />
        </Button>
      </div>

      {settings.showPrice ?
        (
          <div className='flex flex-col gap-px sm:gap-1 w-full lg:w-2/3'>
            {settings.currency === 'USD' && product.variants?.[0]?.priceUSD && (
              <h3 className='font-black line-clamp-1'>${product.variants[0].priceUSD}</h3>
            )}
            {settings.currency === 'Bs' && product.variants?.[0]?.priceBs && (
              <h3 className='font-black line-clamp-1'>{product.variants[0].priceBs} Bs.</h3>
            )}
            <h3 className='font-light line-clamp-1'>{product.name}</h3>
          </div>
        )
        :
        <h3 className='font-light line-clamp-1'>{product.name}</h3>
      }
    </Link>
  );
};

export default ProductCard;