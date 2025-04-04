/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Padding = {
  _type: "padding";
  top?: number;
  bottom?: number;
};

export type Sections = Array<{
  title?: string;
  description?: string;
  carouselImages?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  callToActionLabel?: string;
  settings?: SectionSettings;
  _type: "heroSection";
  _key: string;
} | {
  brands?: Array<{
    logo?: string;
    name?: string;
    _type: "brand";
    _key: string;
  }>;
  settings?: SectionSettings;
  _type: "brandsMarquee";
  _key: string;
}>;

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  slug?: Slug;
  title?: string;
  sections?: Sections;
  seo?: Seo;
};

export type Seo = {
  _type: "seo";
  title?: string;
  description?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Header = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  logoSize?: "sm" | "md" | "auto" | "lg" | "xl" | "2xl";
  navigation?: Array<{
    name?: string;
    link?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "home";
    };
    anchor?: string;
    _type: "internalLink";
    _key: string;
  } | {
    name?: string;
    link?: string;
    openInNewTab?: boolean;
    _type: "externalLink";
    _key: string;
  } | {
    name?: string;
    link?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "home";
    };
    childLinks?: Array<{
      name?: string;
      link?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "home";
      };
      anchor?: string;
      _type: "internalLink";
      _key: string;
    } | {
      name?: string;
      link?: string;
      openInNewTab?: boolean;
      _type: "externalLink";
      _key: string;
    }>;
    _type: "nestedNavigation";
    _key: string;
  }>;
};

export type Settings = {
  _id: string;
  _type: "settings";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  storeName?: string;
  logo?: string;
  favicon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  spaceBetweenSections?: number;
  colorScheme?: {
    primary?: Color;
    secondary?: Color;
    error?: Color;
    success?: Color;
    warning?: Color;
    border?: Color;
    cardBackground?: Color;
    text?: Color;
    background?: Color;
    foreground?: Color;
  };
};

export type Home = {
  _id: string;
  _type: "home";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  sections?: Sections;
};

export type BrandsMarquee = {
  _id: string;
  _type: "brandsMarquee";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  brands?: Array<{
    logo?: string;
    name?: string;
    _type: "brand";
    _key: string;
  }>;
  settings?: SectionSettings;
};

export type HeroSection = {
  _id: string;
  _type: "heroSection";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  carouselImages?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  callToActionLabel?: string;
  settings?: SectionSettings;
};

export type SectionSettings = {
  _type: "sectionSettings";
  hide?: boolean;
  padding?: Padding;
  customCss?: Code;
};

export type Variant = {
  _id: string;
  _type: "variant";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  sku?: string;
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  roastLevel?: "light" | "medium" | "dark";
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  variants?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "variant";
  }>;
  origin?: string;
};

export type Taxon = {
  _id: string;
  _type: "taxon";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  taxons?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "taxon";
  }>;
  products?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "product";
  }>;
};

export type Taxonomy = {
  _id: string;
  _type: "taxonomy";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  taxons?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "taxon";
  }>;
};

export type Catalog = {
  _id: string;
  _type: "catalog";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  taxonomies?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "taxonomy";
  }>;
};

export type InlineSvg = string;

export type Code = {
  _type: "code";
  language?: string;
  filename?: string;
  code?: string;
  highlightedLines?: Array<number>;
};

export type MediaTag = {
  _id: string;
  _type: "media.tag";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Color = {
  _type: "color";
  hex?: string;
  alpha?: number;
  hsl?: HslaColor;
  hsv?: HsvaColor;
  rgb?: RgbaColor;
};

export type RgbaColor = {
  _type: "rgbaColor";
  r?: number;
  g?: number;
  b?: number;
  a?: number;
};

export type HsvaColor = {
  _type: "hsvaColor";
  h?: number;
  s?: number;
  v?: number;
  a?: number;
};

export type HslaColor = {
  _type: "hslaColor";
  h?: number;
  s?: number;
  l?: number;
  a?: number;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Padding | Sections | Page | Seo | Header | Settings | Home | BrandsMarquee | HeroSection | SectionSettings | Variant | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata | Product | Taxon | Taxonomy | Catalog | InlineSvg | Code | MediaTag | Slug | Color | RgbaColor | HsvaColor | HslaColor;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/lib/queries.ts
// Variable: SETTINGS_QUERY
// Query: *[_type == "settings"][0] {  _id,  _type,  storeName,  whatsAppNumber,  logo,  logoSize,  favicon,  currency,  showPrice,  spaceBetweenSections,  colorScheme {    primary,    secondary,    error,    success,    warning,    button,    border,    cardBackground,    text,    background,    foreground  }}
export type SETTINGS_QUERYResult = {
  _id: string;
  _type: "settings";
  storeName: string | null;
  whatsAppNumber: null;
  logo: string | null;
  logoSize: null;
  favicon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  currency: null;
  showPrice: null;
  spaceBetweenSections: number | null;
  colorScheme: {
    primary: Color | null;
    secondary: Color | null;
    error: Color | null;
    success: Color | null;
    warning: Color | null;
    button: null;
    border: Color | null;
    cardBackground: Color | null;
    text: Color | null;
    background: Color | null;
    foreground: Color | null;
  } | null;
} | null;
// Variable: HOME_QUERY
// Query: *[_type == "home"][0] {  _id,  _type,  sections[] {    _type,    ...,    settings {      _type,      padding {        top,        bottom      },      customCss    }  }}
export type HOME_QUERYResult = {
  _id: string;
  _type: "home";
  sections: Array<{
    _type: "brandsMarquee";
    brands?: Array<{
      logo?: string;
      name?: string;
      _type: "brand";
      _key: string;
    }>;
    settings: {
      _type: "sectionSettings";
      padding: {
        top: number | null;
        bottom: number | null;
      } | null;
      customCss: Code | null;
    } | null;
    _key: string;
  } | {
    _type: "heroSection";
    title?: string;
    description?: string;
    carouselImages?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    callToActionLabel?: string;
    settings: {
      _type: "sectionSettings";
      padding: {
        top: number | null;
        bottom: number | null;
      } | null;
      customCss: Code | null;
    } | null;
    _key: string;
  }> | null;
} | null;
// Variable: PAGE_QUERY
// Query: *[_type == "page"][0] {  _id,  _type,  sections[] {    _type,    ...,    settings {      _type,      padding {        top,        bottom      },      customCss    }  }}
export type PAGE_QUERYResult = {
  _id: string;
  _type: "page";
  sections: Array<{
    _type: "brandsMarquee";
    brands?: Array<{
      logo?: string;
      name?: string;
      _type: "brand";
      _key: string;
    }>;
    settings: {
      _type: "sectionSettings";
      padding: {
        top: number | null;
        bottom: number | null;
      } | null;
      customCss: Code | null;
    } | null;
    _key: string;
  } | {
    _type: "heroSection";
    title?: string;
    description?: string;
    carouselImages?: Array<{
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
      _key: string;
    }>;
    callToActionLabel?: string;
    settings: {
      _type: "sectionSettings";
      padding: {
        top: number | null;
        bottom: number | null;
      } | null;
      customCss: Code | null;
    } | null;
    _key: string;
  }> | null;
} | null;
// Variable: HEADER_QUERY
// Query: *[_type == "header"][0]{  ...,  navigation[]{    ...,    _type == "internalLink" => {      ...,      link->{        _type,        "slug": slug.current,      }    },    _type == "nestedNavigation" => {      ...,      link->{        _type,        "slug": slug.current      },      childLinks[]{        ...,        link->{          _type,          "slug": slug.current        }      }    }  }}
export type HEADER_QUERYResult = {
  _id: string;
  _type: "header";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  logoSize?: "2xl" | "auto" | "lg" | "md" | "sm" | "xl";
  navigation: Array<{
    name?: string;
    link?: string;
    openInNewTab?: boolean;
    _type: "externalLink";
    _key: string;
  } | {
    name?: string;
    link: {
      _type: "home";
      slug: null;
    } | null;
    anchor?: string;
    _type: "internalLink";
    _key: string;
  } | {
    name?: string;
    link: {
      _type: "home";
      slug: null;
    } | null;
    childLinks: Array<{
      name?: string;
      link: null;
      openInNewTab?: boolean;
      _type: "externalLink";
      _key: string;
    } | {
      name?: string;
      link: {
        _type: "home";
        slug: null;
      } | null;
      anchor?: string;
      _type: "internalLink";
      _key: string;
    }> | null;
    _type: "nestedNavigation";
    _key: string;
  }> | null;
} | null;
// Variable: CATALOG_QUERY
// Query: {  "taxonomies": *[_type == "taxonomy"] {    _id,    name,    "taxons": taxons[]-> {      _id,      name,      description,      "slug": slug.current,      "productCount": count(products[]->),      "products": products[]-> {        _id,        name,        description,        material,        slug,        careInstructions,        "variants": variants[]->{          _id,          size,          color,          sku,          priceUSD,          priceBs,          "images": images[] {              _type,              _key,              asset-> {                  _type,                  url,                  "dimensions": dimensions              }          }        },      },    },  },}
export type CATALOG_QUERYResult = {
  taxonomies: Array<{
    _id: string;
    name: string | null;
    taxons: Array<{
      _id: string;
      name: string | null;
      description: string | null;
      slug: null;
      productCount: number | null;
      products: Array<{
        _id: string;
        name: string | null;
        description: string | null;
        material: null;
        slug: null;
        careInstructions: null;
        variants: Array<{
          _id: string;
          size: null;
          color: null;
          sku: string | null;
          priceUSD: null;
          priceBs: null;
          images: Array<{
            _type: "image";
            _key: string;
            asset: {
              _type: "sanity.imageAsset";
              url: string | null;
              dimensions: null;
            } | null;
          }> | null;
        }> | null;
      }> | null;
    }> | null;
  }>;
};

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"settings\"][0] {\n  _id,\n  _type,\n  storeName,\n  whatsAppNumber,\n  logo,\n  logoSize,\n  favicon,\n  currency,\n  showPrice,\n  spaceBetweenSections,\n  colorScheme {\n    primary,\n    secondary,\n    error,\n    success,\n    warning,\n    button,\n    border,\n    cardBackground,\n    text,\n    background,\n    foreground\n  }\n}": SETTINGS_QUERYResult;
    "*[_type == \"home\"][0] {\n  _id,\n  _type,\n  sections[] {\n    _type,\n    ...,\n    settings {\n      _type,\n      padding {\n        top,\n        bottom\n      },\n      customCss\n    }\n  }\n}": HOME_QUERYResult;
    "*[_type == \"page\"][0] {\n  _id,\n  _type,\n  sections[] {\n    _type,\n    ...,\n    settings {\n      _type,\n      padding {\n        top,\n        bottom\n      },\n      customCss\n    }\n  }\n}": PAGE_QUERYResult;
    "*[_type == \"header\"][0]{\n  ...,\n  navigation[]{\n    ...,\n    _type == \"internalLink\" => {\n      ...,\n      link->{\n        _type,\n        \"slug\": slug.current,\n      }\n    },\n    _type == \"nestedNavigation\" => {\n      ...,\n      link->{\n        _type,\n        \"slug\": slug.current\n      },\n      childLinks[]{\n        ...,\n        link->{\n          _type,\n          \"slug\": slug.current\n        }\n      }\n    }\n  }\n}": HEADER_QUERYResult;
    "{\n  \"taxonomies\": *[_type == \"taxonomy\"] {\n    _id,\n    name,\n    \"taxons\": taxons[]-> {\n      _id,\n      name,\n      description,\n      \"slug\": slug.current,\n      \"productCount\": count(products[]->),\n      \"products\": products[]-> {\n        _id,\n        name,\n        description,\n        material,\n        slug,\n        careInstructions,\n        \"variants\": variants[]->{\n          _id,\n          size,\n          color,\n          sku,\n          priceUSD,\n          priceBs,\n          \"images\": images[] {\n              _type,\n              _key,\n              asset-> {\n                  _type,\n                  url,\n                  \"dimensions\": dimensions\n              }\n          }\n        },\n      },\n    },\n  },\n}": CATALOG_QUERYResult;
  }
}
