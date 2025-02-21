import { defineField } from 'sanity';

export default defineField({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().max(100)
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'carouselImages',
      title: 'Carousel Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'callToActionLabel',
      title: 'Call to Action Label',
      type: 'string',
      validation: Rule => Rule.max(200)
    }),
    defineField({
      name: 'settings',
      title: 'Settings',
      type: 'sectionSettings'
    })
  ]
});