import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0] {
  _id,
  _type,
  storeName,
  logo,
  logoSize,
  favicon,
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

export const PAGE_QUERY = defineQuery(`*[_type == "page"][0] {
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

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0] {
  _type,
  _id,
  name,
  logoSize,
  navigation[] {
    name,
    _type,
    _key,
    ...,
    link-> {
      _type,
      "slug": select(
        // For pages
        _type == "page" => slug.current,
        // For home page
        _type == "home" => "/",
        null
      )
    },
    openInNewTab,
    "link": select(
      _type == "internalLink" => link-> {
        _type,
        "slug": select(
          // For pages
          _type == "page" => slug.current,
          // For home page
          _type == "home" => "/",
          null
        )
      },
      _type == "externalLink" => link,
      null
    )
  }
}`);

export const CATALOG_QUERY = defineQuery(`{
  "taxonomies": *[_type == "taxonomy"] {
    _id,
    name,
    "taxons": taxons[]-> {
      _id,
      name,
      description,
      "products": products[]-> {
        _id,
        name,
        description,
        material,
        careInstructions,
        "variants": variants[]->{
          _id,
          size,
          color,
          sku,
          "images": images[] {
              _type,
              _key,
              asset-> {
                  _type,
                  url,
                  "dimensions": dimensions
              }
          }
        },
      },
    },
  },
}`);
