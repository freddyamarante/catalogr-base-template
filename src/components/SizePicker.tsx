'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

interface SizePickerProps {
  allSizes: string[];
  availableSizes: string[];
  selectedSize: string;
}

const SizePicker = ({ 
  allSizes,
  availableSizes,
  selectedSize
}: SizePickerProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const size = searchParams.get('size');
  const [currentSelectedSize, setCurrentSelectedSize] = useState<string | null>(size || null);

  useEffect(() => {
    if (!size && availableSizes[0]) {
      setCurrentSelectedSize(availableSizes[0]);
      const url = new URL(window.location.href);
      url.searchParams.set('size', availableSizes[0]);
      window.history.replaceState({}, '', url.toString());
    }

    if (size && !availableSizes.includes(size)) {
      const newSize = availableSizes[0];
      setCurrentSelectedSize(newSize);
      const params = new URLSearchParams(searchParams.toString());
      params.set('size', newSize);
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [size, availableSizes, router, pathname, searchParams]);

  const handleSizeChange = (size: string) => {
    setCurrentSelectedSize(size);
    const params = new URLSearchParams(searchParams.toString());
    params.set('size', size);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex flex-col gap-2'>
      <h4 className='font-bold'>Size</h4>
      <fieldset aria-label="Choose a size" className="mt-2">
      <RadioGroup
        value={selectedSize}
        onValueChange={handleSizeChange}
        className="flex flex-wrap gap-3 w-fit"
      >
        {allSizes.map(size => (
        <RadioGroupItem
          key={size}
          value={size}
          disabled={!availableSizes.includes(size)}
          hideIndicator
          className={cn(
          'cursor-pointer focus:outline-none border-none text-xl font-semibold !p-2 leading-none size-[40]',
          currentSelectedSize === size
            ? 'text-background bg-border'
            : 'text-text',
          !availableSizes.includes(size) && 'opacity-50 cursor-not-allowed'
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