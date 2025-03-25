'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { cn } from '@/lib/utils';

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

  const handleSizeChange = (size: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('size', size);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
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
              className={cn(
                'cursor-pointer focus:outline-none border-none text-xl font-semibold !p-2 leading-none size-[40]',
                selectedSize === size
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