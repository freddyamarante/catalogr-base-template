// schemas/settings.ts
import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'storeName',
      title: 'Store Name',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'inlineSvg'
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image'
    }),
    defineField({
      name: 'spaceBetweenSections',
      title: 'Space Between Sections',
      type: 'number',
      validation: Rule => Rule.min(0).max(1000)
    }),
    defineField({
      name: 'colorScheme',
      title: 'Color Scheme',
      type: 'object',
      fields: [
        defineField({
          name: 'primary',
          title: 'Primary Color',
          type: 'color'
        }),
        defineField({
          name: 'secondary',
          title: 'Secondary Color',
          type: 'color'
        }),
        defineField({
          name: 'error',
          title: 'Error Color',
          type: 'color'
        }),
        defineField({
          name: 'success',
          title: 'Success Color',
          type: 'color'
        }),
        defineField({
          name: 'warning',
          title: 'Warning Color',
          type: 'color'
        }),
        defineField({
          name: 'border',
          title: 'Border Color',
          type: 'color'
        }),
        defineField({
          name: 'cardBackground',
          title: 'Card Background Color',
          type: 'color'
        }),
        defineField({
          name: 'text',
          title: 'Text Color',
          type: 'color'
        }),
        defineField({
          name: 'background',
          title: 'Background Color',
          type: 'color'
        }),
        defineField({
          name: 'foreground',
          title: 'Foreground Color',
          type: 'color'
        })
      ]
    })
  ],
  initialValue: {
    storeName: 'My Store',
    spaceBetweenSections: 40,
    colorScheme: {
      primary: '#C2C2C2',
      secondary: '#00CED1',
      error: '#C44536',
      success: '#2E9D63',
      warning: '#C47D0A',
      button: '#373737',
      border: '#D6D4CB',
      cardBackground: '#121212',
      text: '#D6D4CB',
      background: '#121212',
      foreground: '#0E0E0E'
    }
  },
  preview: {
    select: {
      title: 'storeName',
      media: 'logo'
    }
  }
});