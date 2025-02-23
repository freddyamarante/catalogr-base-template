import { type SchemaTypeDefinition } from 'sanity'
import heroSection from '../lib/sections/heroSection'
import home from '../lib/singletons/home'
import settings from '../lib/singletons/settings'
import sectionsList from '../lib/globals/sectionsList'
import sectionSettings from '../lib/objects/sectionSettings'
import padding from '../lib/objects/padding'
import brandsMarquee from '../lib/sections/brandsMarquee'

const sections: SchemaTypeDefinition[] = [
  heroSection,
  brandsMarquee,
]

const footers: SchemaTypeDefinition[] = [

]

const singletons: SchemaTypeDefinition[] = [
  home,
  settings,
]

const objects: SchemaTypeDefinition[] = [
  sectionsList,
  sectionSettings,
  padding,
]

const documents: SchemaTypeDefinition[] = [
  
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
