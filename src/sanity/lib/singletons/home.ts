import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'home',
  type: 'document',
  fields: [
    defineField({
      name: 'sections',
      type: 'sections',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Principal'}),
  },
});
