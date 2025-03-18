'use client'

import React from 'react';

import ProductCard from './ProductCard';

interface ProductCardGridProps {
  products: Array<{
    _id: string;
    name: string | null;
    description: string | null;
    material: string | null;
    careInstructions: string | null;
    variants?: Array<{
      _id: string;
      size: string | null;
      color: string | null;
      sku: string | null;
      priceUSD: number | null;
      priceBs: number | null;
      images?: Array<{
        _key: string;
        asset?: {
          url?: string | null;
          dimensions?: string | null;
        } | null;
        _type: string;
      }> | null;
    }> | null;
  } | null>;
}

const ProductCardGrid: React.FC<ProductCardGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-10">
      {products && products.filter(product => product !== null).map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductCardGrid;