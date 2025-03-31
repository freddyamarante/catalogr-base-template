/* eslint-disable @typescript-eslint/no-explicit-any */
 
import { twMerge } from "tailwind-merge"
import { dataset, projectId } from "@/sanity/env"
import createImageUrlBuilder from "@sanity/image-url"
import { SETTINGS_QUERYResult } from "../../sanity.types";
import { ValidSettings } from "@/components/context/ThemeProvider";
import { SanityColor } from "@/components/context/ThemeProvider";

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx"

const builder = createImageUrlBuilder({ projectId, dataset })

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}

export const validateSettings = (data: SETTINGS_QUERYResult): ValidSettings => {
  const settings = (data?._type === 'settings' ? data : null) ?? {
    _type: 'settings',
    storeName: null,
    logo: null,
    spaceBetweenSections: null,
    colorScheme: null
  };

  const defaultColor: SanityColor = {
    _type: 'color',
    hex: '#ffffff',
    alpha: 1,
    hsl: { _type: 'hslaColor', h: 0, s: 0, l: 1, a: 1 },
    hsv: { _type: 'hsvaColor', h: 0, s: 0, v: 1, a: 1 },
    rgb: { _type: 'rgbaColor', r: 255, g: 255, b: 255, a: 1 }
  };

  return {
    storeName: settings?.storeName || 'Default Store',
    logo: settings?.logo || '',
    spaceBetweenSections: settings?.spaceBetweenSections || 24,
    colorScheme: {
      primary: settings?.colorScheme?.primary || defaultColor,
      secondary: settings?.colorScheme?.secondary || defaultColor,
      error: settings?.colorScheme?.error || defaultColor,
      success: settings?.colorScheme?.success || defaultColor,
      warning: settings?.colorScheme?.warning || defaultColor,
      button: settings?.colorScheme?.button || defaultColor,
      border: settings?.colorScheme?.border || defaultColor,
      cardBackground: settings?.colorScheme?.cardBackground || defaultColor,
      text: settings?.colorScheme?.text || defaultColor,
      background: settings?.colorScheme?.background || defaultColor,
      foreground: settings?.colorScheme?.foreground || defaultColor,
    },
  };
};

export const generateRandomAspectRatioHeight = () => {
  const aspectRatios = [1, 2, 3];
  const randomIndex = Math.floor(Math.random() * aspectRatios.length);
  const aspectRatio = aspectRatios[randomIndex];

  let aspectRatioClass;

  switch (aspectRatio) {
    case 1:
      aspectRatioClass = 'aspect-[1/1]';
      break;
    case 2:
      aspectRatioClass = 'aspect-[8/9]';
      break;
    case 3:
      aspectRatioClass = 'aspect-[8/10]';
      break;
    default: 
      aspectRatioClass = 'aspect-[1/1]';
      break;  
  }

  return aspectRatioClass;
}

export const getAvailableColors = (variants, selectedSize) => {
  return Array.from(new Set(
    variants
      .filter(v => !selectedSize || v.size === selectedSize)
      .map(v => v.color)
  )).filter(Boolean) as string[];
};

export const getAvailableSizes = (variants, selectedColor) => {
  return Array.from(new Set(
    variants
      .filter(v => !selectedColor || v.color === selectedColor)
      .map(v => v.size)
  )).filter(Boolean) as string[];
};

export const getDefaultVariant = (variants) => {
  return variants[0] || null;
};

export const getWhatsAppUrl = (
  selectedItems: Array<{
    product: any;
    variants: Array<{
      name?: string
      color?: string;
      size?: string;
      sku?: string;
      priceUSD?: number;
      priceBs?: number;
    }>;
  }>,
  phoneNumber: string,
  currency?: string
) => {
  if (!phoneNumber) {
    console.error('WhatsApp number is required');
    return '#';
  }

  const messages = selectedItems.map(({ product, variants }) => {
    const productName = product?.name || 'Producto desconocido';
    const brand = product?.brand || 'Sin marca';

    const variantMessages = variants.map((variant) => {
      const variantName = variant?.name || 'Sin variante especificada';
      const colorText = variant?.color || 'Sin color especificado';
      const sizeText = variant?.size || 'Sin talla especificada';
      const sku = variant?.sku || 'Sin SKU especificado';
      const priceUSD = variant?.priceUSD || 0;
      const priceBs = variant?.priceBs || 0;

      return `*Variante:* ${variantName}\n*Color:* ${colorText}\n*Talla:* ${sizeText}\n*SKU:* ${sku}\n*Precio:* ${
        currency === 'USD' ? `${priceUSD} USD` : `${priceBs} Bs`
      }`
    });

    return `*Producto:* ${productName}\n*Marca:* ${brand}\n${variantMessages.join('\n\n')}`;
  });

  
  const message = `Hola, estoy interesado en comprar:\n\n${messages.join('\n\n')}`;
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
  
  console.log('WhatsApp URL:', url);
  return url;
};