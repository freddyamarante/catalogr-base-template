import { type InsertMenuOptions } from "sanity";

export const sectionOptionInsertMenu: {insertMenu: InsertMenuOptions} = {
  insertMenu: {
    views: [
      {
        name: 'grid',
        previewImageUrl: (schemaTypeName) =>
          `/src/assets/${schemaTypeName}.jpg`,
      },
    ],
  },
};