'use client'

import React from 'react';
import { useState } from 'react';

import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface ColorPickerProps {
  colors: Array<{
    name: string | null;
    hex: string | null
  }> | null;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors?.[0].name)

  return (
    <div>
      <h4 className='font-bold'>Color</h4>

      <fieldset aria-label="Choose a color" className="mt-2">
        <RadioGroup value={selectedColor ?? ''} onValueChange={setSelectedColor} className="flex items-center gap-x-3">
          {colors && colors.map((color, index) => (
            <RadioGroupItem
              key={index}
              value={color.name || index.toString()}
              aria-label={color.name ?? ''}
              className='size-[40]'
              style={{
                backgroundColor: color.hex ?? '#121212',
                fill: color.hex ?? '#121212',
                boxShadow: selectedColor === (color.name || index.toString())
                  ? `0 0 0 2px ${color.hex ?? '#121212'}`
                  : undefined,
              }}
            >
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </fieldset>
    </div>
  );
};

export default ColorPicker;