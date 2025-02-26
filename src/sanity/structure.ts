import { type StructureResolver } from 'sanity/structure';
import { CogIcon, HomeIcon, MenuIcon, DocumentIcon, MasterDetailIcon } from '@sanity/icons';
import { globalSections } from './lib/globals/globalSections';

import { singletons } from './schemaTypes';

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
      S.listItem()
        .title('Catalogo')
        .icon(MasterDetailIcon)
        .child(
          S.document()
            .title('Catalogo')
            .schemaType('catalogPage')
            .documentId('catalogPage')
        ),
      S.listItem()
        .title('Cabecera')
        .icon(MenuIcon)
        .child(
          S.document()
            .title('Cabecera')
            .schemaType('header')
            .documentId('header')
        ),
      S.documentTypeListItem('page').icon(DocumentIcon),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => ![
          ...globalSections.map(section => section.type),
          ...singletons.map(singleton => singleton.name)
        ].includes(item.getId()!)
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
  