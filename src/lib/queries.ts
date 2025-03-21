import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY = defineQuery(`*[_type == "settings"][0] {
  _id,
  _type,
  storeName,
  logo,
  logoSize,
  favicon,
  currency,
  showPrice,
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

export const HEADER_QUERY = defineQuery(`*[_type == "header"][0]{
  ...,
  navigation[]{
    ...,
    _type == "internalLink" => {
      ...,
      link->{
        _type,
        "slug": slug.current,
      }
    },
    _type == "nestedNavigation" => {
      ...,
      link->{
        _type,
        "slug": slug.current
      },
      childLinks[]{
        ...,
        link->{
          _type,
          "slug": slug.current
        }
      }
    }
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
        slug,
        careInstructions,
        "variants": variants[]->{
          _id,
          size,
          color,
          sku,
          priceUSD,
          priceBs,
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

export const PRODUCT_QUERY = defineQuery(`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    _type,
    _rev,
    _createdAt,
    _updatedAt,
    name,
    material,
    careInstructions,
    brand,
    "slug": slug.current,
    "variants": variants[]->{
      _id,
      _type,
      _key,
      size,
      color,
      colorRgb,
      sku,
      priceUSD,
      priceBs,
      "images": images[] {
        _type,
        _key,
        asset-> {
          _type,
          url,
        }
      }
    }
  }
`);
