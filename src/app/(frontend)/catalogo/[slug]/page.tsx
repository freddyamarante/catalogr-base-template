import { sanityFetch } from "@/sanity/lib/live";
import { PRODUCT_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";

import ColorPicker from "@/components/ColorPicker";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logger from "@/components/Logger";

import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import SizePicker from "@/components/SizePicker";
import { Carousel, CarouselItem, CarouselContent } from "@/components/ui/carousel";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: product } = await sanityFetch({
    query: PRODUCT_QUERY,
    params: await params,
  });

  const colorOptions = Array.from(
    new Map(
      product.variants.map((variant: { color: string | null; colorRgb: { hex: string | null } }) => [
        variant.color,
        { name: variant.color ?? null, hex: variant.colorRgb?.hex ?? null },
      ])
    ).values()
  ) as Array<{ name: string | null; hex: string | null }>;

  const sizeOptions = Array.from(
    new Map(
      product.variants.map((variant: { size: string | null }) => [
        variant.size,
        variant.size,
      ])
    ).values()
  ) as string[];

  if (!product) {
    notFound()
  }

  return (
    <div className="my-4 overflow-x-visible">
      <div className="mx-auto mt-8 px-4 sm:px-6 lg:px-8 overflow-x-visible">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="">{product.name}</h1>
            </div>
          </div>

          <div className="mt-8 hidden sm:block lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product?.variants?.[0].images?.map((image, index) => (
                <Image
                  key={image._key}
                  alt={`${product.name} image ${index + 1}`}
                  src={urlFor(image)
                    .width(800)
                    .height(800)
                    .quality(100)
                    .auto("format")
                    .url()}
                  width={800}
                  height={800}
                  className={cn(
                    index === 0 ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                    'rounded-4xl',
                  )}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-8 block sm:hidden w-full">
            <Carousel
              className="w-full h-full custom-carousel"
            >
              <CarouselContent className="h-full w-full -ml-2">
                {product?.variants?.[0].images && product?.variants?.[0].images.map((image) => {
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
                          loading={product?.variants?.[0].images[0] ? "eager" : "lazy"}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mt-8 lg:col-span-5">
            <form className="space-y-6">
              <ColorPicker colors={colorOptions} />
              <SizePicker sizes={sizeOptions} />

              <Logger message={sizeOptions} />

              <Button size="2xl" type="submit" className="flex justify-between py-8 w-full">
                <span className="font-bold text-2xl">
                  ${product?.variants?.[0].priceUSD}
                </span>
                <span className="font-semibold text-xl text-right">
                  Comprar
                </span>
              </Button>
            </form>

            {/* Product details */}
            <div className="mt-10">
              <h2 className="text-sm font-medium">Description</h2>

              {/* <div
                  dangerouslySetInnerHTML={{ __html: product.description }}
                  className="mt-4 space-y-4 text-sm/6 text-gray-500"
                /> */}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium">Fabric &amp; Care</h2>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-1 pl-5 text-sm/6 text-gray-500 marker:text-gray-300">
                  {product.details && product.details.map((item) => (
                    <li key={item} className="pl-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
