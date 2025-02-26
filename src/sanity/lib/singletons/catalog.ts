import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'catalogPage',
  title: 'Catálogo',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    })
  ],
  preview: {
    prepare: () => ({title: 'Catálogo'}),
  },
});
