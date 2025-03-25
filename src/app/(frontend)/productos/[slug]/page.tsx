import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";

import ColorPicker from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import Image from "next/image";


import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import SizePicker from "@/components/SizePicker";
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";

export default async function Product({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  if (!product) {
    notFound();
  }

  const allVariants = product.variants || [];

  const colorMap = new Map<string, string>();
  allVariants.forEach(variant => {
    if (variant.color && variant.colorRgb?.hex) {
      colorMap.set(variant.color, variant.colorRgb.hex);
    }
  });

  const colorOptions = Array.from(colorMap.entries()).map(([name, hex]) => ({
    name,
    hex
  }));

  const allPossibleSizes = Array.from(new Set(
    allVariants.flatMap(v => v.availableSizes || [])
  )).filter((size): size is string => Boolean(size));

  let selectedColor = await typeof searchParams.color === 'string'
    ? searchParams.color
    : colorOptions[0]?.name || '';

  let selectedSize = await typeof searchParams.size === 'string'
    ? searchParams.size
    : allPossibleSizes[0] || '';

  let currentVariant = allVariants.find(v =>
    v.color === selectedColor &&
    (v.availableSizes || []).includes(selectedSize)
  );

  if (!currentVariant) {
    currentVariant = allVariants.find(v => v.color === selectedColor) ||
      allVariants.find(v => (v.availableSizes || []).includes(selectedSize)) ||
      allVariants[0];

    selectedColor = currentVariant?.color || '';
    selectedSize = currentVariant?.availableSizes?.[0] || '';
  }

  const currentAvailableSizes = currentVariant?.availableSizes || [];

  return (
    <div className="my-4 overflow-x-visible">
      <div className="mx-auto mt-8 px-4 sm:px-6 lg:px-8 overflow-x-visible">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5 lg:col-start-8 hidden sm:block">
            <div className="space-y-3">
              {currentVariant.name ? <h1 className="uppercase">{currentVariant.name}</h1> : <h1 className="uppercase">product.name</h1>}
              {product.brand ? <p className="text-sm text-uppercase">Marca: <span className="font-semibold">{product.brand}</span></p> : <p className="text-sm">Sin marca</p>}
              {product.description ? <p className="text-lg">{product.description}</p> : <p className="text-lg">Sin descripción</p>}
            </div>
          </div>

          <div className="mt-8 hidden sm:block lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {currentVariant.images.map((image, index) => (
                <div key={image._key} className={cn(index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block')}>
                  <Image
                    alt={`${product.name} image ${index + 1}`}
                    src={urlFor(image)
                      .width(800)
                      .height(800)
                      .quality(100)
                      .auto("format")
                      .url()}
                    width={800}
                    height={800}
                    className={cn('rounded-4xl')}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-8 block sm:hidden w-full">
            <Carousel
              className="w-full h-full custom-carousel"
            >
              <CarouselContent className="h-full w-full -ml-2">
                {currentVariant.images && currentVariant.images.map((image) => {
                  return (
                    <CarouselItem key={image._key} className="h-full w-full pl-2 md:pl-0 lg:pl-0 overflow-visible">
                      <div className='w-full h-full relative aspect-square'>
                        <Image
                          className="w-full h-full object-cover rounded-4xl"
                          src={urlFor(image)
                            .width(800)
                            .height(800)
                            .quality(100)
                            .auto("format")
                            .url()}
                          alt={image.alt || "Image"}
                          width={800}
                          height={800}
                          loading={currentVariant ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 block sm:hidden mt-8">
            <div className="flex justify-between">
            {currentVariant.name ? <h1 className="uppercase">{currentVariant.name}</h1> : <h1 className="uppercase">product.name</h1>}
              {product.brand ? <p className="text-sm text-uppercase">Marca: <span className="font-semibold">{product.brand}</span></p> : <p className="text-sm">Sin marca</p>}
              {product.description ? <p className="text-lg">{product.description}</p> : <p className="text-lg">Sin descripción</p>}
            </div>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form className="space-y-8">
              <ColorPicker
                colors={colorOptions}
                selectedColor={typeof selectedColor === 'string' ? selectedColor : ''}
              />

              <SizePicker
                allSizes={allPossibleSizes}
                availableSizes={currentAvailableSizes}
                selectedSize={typeof selectedSize === 'string' ? selectedSize : ''}
              />

              <Button size="2xl" type="submit" className="flex justify-between py-8 w-full">
                <span className="font-bold text-2xl">
                  ${product?.variants?.[0].priceUSD}
                </span>
                <span className="font-semibold text-xl text-right">
                  Comprar
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}