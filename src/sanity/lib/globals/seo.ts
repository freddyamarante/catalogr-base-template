import {StringRule, defineField} from 'sanity';

export default defineField({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  // group: 'SEO',
  options: {
    collapsible: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Seo meta title',
      // components: {
      //   field: SeoTitle,
      // },
      validation: (Rule: StringRule) => [
        Rule.required().max(70).warning('Should be under 70 characters'),
      ],
    }),
    defineField({
      name: 'description',
      description: 'Seo meta description',
      type: 'string',
      title: 'Description',
      validation: (Rule: StringRule) => Rule.max(160).warning('Should be under 70 characters'),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
    }),
  ],
});
