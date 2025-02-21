import { defineField } from 'sanity';
import { globalSections } from './globalSections';
import { sectionOptionInsertMenu } from './sectionOptionInsertMenu';

export default defineField({
  title: 'Secciones',
  name: 'sections',
  type: 'array',
  group: 'pagebuilder',
  of: globalSections,
  options: {
    ...sectionOptionInsertMenu,
  },
})