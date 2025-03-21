

import { client } from "@/sanity/lib/client";
import { CATALOG_QUERY } from "@/lib/queries";

import ProductCardGrid from "@/components/ProductCardGrid";

const options = { next: { revalidate: 60 } };

export default async function Catalog() {
  const catalog = await client.fetch(CATALOG_QUERY, {}, options);

  const products = catalog.taxonomies.flatMap(taxonomy =>
    taxonomy.taxons?.flatMap(taxon => taxon.products) || []
  );

  return (
    <main className="py-12">
      <ProductCardGrid products={products} />
    </main>
  );
}
