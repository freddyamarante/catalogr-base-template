'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {colorInput} from '@sanity/color-input'
import {media} from 'sanity-plugin-media';
import {sanityCommerce, type SanityCommercePluginConfig,} from '@commercelayer/sanity-plugin-commerce';
import {codeInput} from '@sanity/code-input'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'

const sanityCommerceConfig: SanityCommercePluginConfig = {
  productLabel: 'Producto',
  variantLabel: 'Variante',
  taxonomyLabel: 'Sistema de Categoría',
  taxonLabel: 'Categoría',
  productAttributes: [
    { name: 'brand', title: 'Marca', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } },
    { name: 'material', title: 'Material', type: 'string' },
    { name: 'careInstructions', title: 'Instrucciones de Cuidado', type: 'text' },
  ],
  variantAttributes: [
    { 
      name: 'availableSizes', 
      title: 'Tamaños Disponibles para esta variante', 
      type: 'array',
      of: [{type: 'string'}]
    },
    { name: 'color', title: 'Color', type: 'string' },
    { name: 'colorRgb', title: 'Color RGB', type: 'color' },
    { name: 'sku', title: 'SKU', type: 'string' },
    { name: 'priceUSD', title: 'Precio USD', type: 'number', validation: Rule => Rule.min(0) },
    { name: 'priceBs', title: 'Precio Bs', type: 'number', validation: Rule => Rule.min(0) },    
  ],
};

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    colorInput(),
    media(),
    codeInput(),
    inlineSvgInput(),
    sanityCommerce(sanityCommerceConfig),
  ],
})
