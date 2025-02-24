import React from 'react';
import { HeroSection as HeroSectionProps } from '../../../sanity.types';
import { Button } from '../ui/button';
import ImageCarousel from '../ImageCarousel';

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, carouselImages, callToActionLabel }) => {
  return (
    <>
      <div className="w-full mx-auto my-16 max-w-full">
        <div className="flex flex-col h-full">
          {title && <h1 className="text-4xl lg:text-5xl font-bold tracking-wider">{title}</h1>}
          {description && <p className="text-lg mt-4">{description}</p>}

          <div className="relative w-full h-full mt-6">
            <div className="overflow-hidden w-full h-full rounded-3xl">
              <React.Suspense fallback={<div>Loading...</div>}>
                <ImageCarousel images={carouselImages} />
              </React.Suspense>
            </div>
            <div className="absolute bottom-0 right-0 z-50 mb-4 mr-4">
              <Button className="text-lg">
                {callToActionLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
