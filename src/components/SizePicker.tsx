'use client'

import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

import { cn } from '@/lib/utils';

interface SizePickerProps {
  sizes: string[];
}

const SizePicker: React.FC<SizePickerProps> = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState(sizes?.[0])

  return (
    <div className="mt-8">
      <h4 className='font-bold'>Size</h4>

      <fieldset aria-label="Choose a size" className="mt-2">
        <RadioGroup
          value={selectedSize}
          onValueChange={setSelectedSize}
          className="flex gap-3 w-fit"
        >
          {sizes && sizes.map((size, index) => (
            <RadioGroupItem
              key={`${size}-${index}`}
              value={size}
              className={cn(
                'cursor-pointer focus:outline-none border-none text-xl font-semibold !p-2 leading-none size-[40]',
                selectedSize === size
                  ? 'text-background bg-border'
                  : 'text-text'
              )}
            >
              {size}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
};

export default SizePicker;