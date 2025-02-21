
'use client'

import React from 'react';
import { Carousel, CarouselItem, CarouselContent } from './ui/carousel';
import NoiseLight from './NoiseLight';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { internalGroqTypeReferenceTo, SanityImageHotspot, SanityImageCrop } from '../../sanity.types';

interface ImageCarouselProps {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      metadata?: {
        lqip?: string;
      };
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
    alt?: string;
  }>;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ loop: true }}
      className="w-full h-full overflow-hidden"
    >
      <CarouselContent className="h-full w-full ml-0">
        {images && images.map((image) => {
          return (
            <CarouselItem key={image._key} className="h-full w-full pl-0 md:pl-0 lg:pl-0">
              <Image 
                  className="w-full aspect-[800/300]"
                  src={urlFor(image)
                    .width(800)
                    .height(300)
                    .quality(80)
                    .auto("format")
                    .url()}
                  alt="Image"
                  width="800"
                  height="300"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <NoiseLight />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;