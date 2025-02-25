import { defineField, defineArrayMember, defineType } from "sanity";
import {ExternalLink, Link, MenuSquare} from 'lucide-react';

export const internalLinkField = defineField({
  name: 'link',
  title: 'Internal link',
  type: 'reference',
  to: [
    {type: 'home'},
    {type: 'page'}
  ],
});

export const internalLinkObject = {
  type: 'object',
  name: 'internalLink',
  icon: Link,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    internalLinkField,
    defineField({
      name: 'anchor',
      description: 'The ID of the element to scroll to, without the #.',
      type: 'string',
    }),
  ],
};

export const externalLinkObject = {
  type: 'object',
  name: 'externalLink',
  icon: ExternalLink,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
    defineField({
      name: 'openInNewTab',
      type: 'boolean',
    }),
  ],
};

export const nestedNav = {
  type: 'object',
  name: 'nestedNavigation',
  icon: MenuSquare,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    internalLinkField,
    defineField({
      name: 'childLinks',
      type: 'array',
      of: [
        defineArrayMember(internalLinkObject),
        defineArrayMember(externalLinkObject),
      ],
    }),
  ],
};

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'logoSize',
      title: 'Logo Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'sm' },
          { title: 'Medium', value: 'md' },
          { title: 'Auto', value: 'auto' },
          { title: 'Large', value: 'lg' },
          { title: 'Extra Large', value: 'xl' },
          { title: '2x Large', value: '2xl' }
        ]
      }
    }),
    defineField({
      name: 'navigation',
      type: 'array',
      of: [
        defineArrayMember(internalLinkObject),
        defineArrayMember(externalLinkObject),
        defineArrayMember(nestedNav),
      ],
    })
  ],
  initialValue: {
    logoSize: 'auto',
    navigation: [],
  }
})