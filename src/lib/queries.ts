import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0] {
  _id,
  _type,
  storeName,
  logo {
    asset->{
      _ref,
      _type
    },
    hotspot,
    crop
  },
  spaceBetweenSections,
  colorScheme {
    primary,
    secondary,
    error,
    success,
    warning,
    button,
    border,
    cardBackground,
    text,
    background,
    foreground
  }
}`);

export const HOME_QUERY = defineQuery(`*[_type == "home"][0] {
  _id,
  _type,
  sections[] {
    _type,
    ...,
    settings {
      _type,
      padding {
        top,
        bottom
      },
      customCss
    }
  }
}`);
