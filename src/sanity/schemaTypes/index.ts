import { type SchemaTypeDefinition } from 'sanity'
import heroSection from '../lib/sections/heroSection'
import home from '../lib/singletons/home'
import settings from '../lib/singletons/settings'
import sectionsList from '../lib/globals/sectionsList'
import sectionSettings from '../lib/objects/sectionSettings'
import padding from '../lib/objects/padding'
import brandsMarquee from '../lib/sections/brandsMarquee'
import header from '../lib/singletons/header'
import seo from '../lib/globals/seo'
import page from '../lib/singletons/page'
import catalogPage from '../lib/singletons/catalog'

export const sections: SchemaTypeDefinition[] = [
  heroSection,
  brandsMarquee,
]

export const footers: SchemaTypeDefinition[] = [

]

export const singletons: SchemaTypeDefinition[] = [
  home,
  settings,
  header,
  page,
  catalogPage,
]

export const objects: SchemaTypeDefinition[] = [
  sectionsList,
  sectionSettings,
  padding,
  seo,
]

export const documents: SchemaTypeDefinition[] = [
  
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...sections,
    ...footers,
    ...singletons,
    ...objects,
    ...documents
  ],
}
