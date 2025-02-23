import { defineField } from 'sanity';

export default defineField({
  name: 'brandsMarquee',
  title: 'Brands Marquee',
  type: 'document',
  fields: [
    defineField({
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        defineField({
          name: 'brand',
          title: 'Brand',
          type: 'object',
          fields: [
            defineField({
              name: 'logo',
              title: 'Logo',
              type: 'inlineSvg',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'settings',
      title: 'Settings',
      type: 'sectionSettings'
    })
  ],
  preview: {
    prepare: () => ({title: 'Brands Marquee'}),
  },
});