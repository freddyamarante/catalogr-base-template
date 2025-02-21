import { type StructureResolver } from 'sanity/structure';
import { CogIcon, HomeIcon } from '@sanity/icons';
import { globalSections } from './lib/globals/globalSections';

export const structure: StructureResolver = (S) =>
  S.list()
  .title('Contenido')
  .items([
    S.listItem()
    .title('Principal')
    .icon(HomeIcon)
    .child(
    S.document()
    .title('Principal')
    .schemaType('home')
    .documentId('home')
    ),
    S.divider(),
    ...S.documentTypeListItems().filter(
    item => !['settings', 'home', ...globalSections.map(section => section.type)].includes(item.getId()!)
    ),
    S.listItem()
    .title('Configuración')
    .icon(CogIcon)
    .child(
    S.document()
    .title('Configuración')
    .schemaType('settings')
    .documentId('settings')
    ),
  ]);
  