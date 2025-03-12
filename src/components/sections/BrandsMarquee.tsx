import React from 'react';
import { BrandsMarquee as BrandsMarqueeProps } from '../../../sanity.types';
import Marquee from 'react-fast-marquee'

const BrandsMarquee: React.FC<BrandsMarqueeProps> = ({ brands }) => {
  
  return (
    <Marquee autoFill={true} gradient={false} speed={60} className='overflow-visible! w-full'>
      {brands && brands.length > 0 && brands.map((brand, index) => (
      <div className='ml-14 md:ml-40 w-24 md:w-48 h-24 md:h-40' key={index} dangerouslySetInnerHTML={{ __html: brand.logo || '' }} />
      ))}
    </Marquee>
  );
};

export default BrandsMarquee;
