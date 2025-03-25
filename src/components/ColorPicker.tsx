'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface ColorOption {
  name: string;
  hex: string;
}

interface ColorPickerProps {
  colors: ColorOption[];
  selectedColor: string;
}

const ColorPicker = ({ 
  colors, selectedColor
}: ColorPickerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const color = searchParams.get('color')
  const [currentSelectedColor, setCurrentSelectedColor] = useState<string | null>(color || null);

  useEffect(() => {
    if (!color && colors?.[0]?.name) {
      setCurrentSelectedColor(colors[0].name);
      const url = new URL(window.location.href);
      url.searchParams.set('color', colors[0].name);
      window.history.replaceState({}, '', url.toString());
    }
  }, [color, colors]);

  const handleColorChange = (color: string) => {
    setCurrentSelectedColor(color);
    const params = new URLSearchParams(searchParams.toString());
    params.set('color', color);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <h4 className='font-bold'>Color</h4>
      <fieldset aria-label="Choose a color" className="mt-2">
        <RadioGroup 
          value={selectedColor} 
          onValueChange={handleColorChange}
          className="grid grid-cols-3 gap-3 w-fit"
        >
          {colors && colors.map((color, index) => {
            return (
              <RadioGroupItem
              key={index}
              value={color.name || index.toString()}
              aria-label={color.name ?? ''}
              className={cn('size-[40] w-fit')}
              style={{
                backgroundColor: color.hex ?? '#121212',
                fill: color.hex ?? '#121212',
                boxShadow: currentSelectedColor === (color.name || index.toString())
                  ? `0 0 0 3px ${color.hex ?? '#121212'}`
                  : undefined,
              }}
              />
            );
          })}
        </RadioGroup>
      </fieldset>
    </div>
  );
};

export default ColorPicker;