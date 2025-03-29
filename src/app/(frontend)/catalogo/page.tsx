import { client } from "@/sanity/lib/client";
import { CATALOG_QUERY } from "@/lib/queries";

import ProductCardGrid from "@/components/ProductCardGrid";
import TaxonomyFilter from "@/components/TaxonomyFilter";

const options = { next: { revalidate: 60 } };

export default async function Catalog({
  searchParams
}) {
  const { taxonomies} = await client.fetch(CATALOG_QUERY, {}, options);

  const selectedTaxonomy = searchParams.taxonomyId;
  const selectedTaxon = searchParams.taxonId;

  const filteredProducts = taxonomies
    .flatMap(taxonomy => 
      taxonomy.taxons?.flatMap(taxon => {
        const matchesTaxonomy = !selectedTaxonomy || taxonomy._id === selectedTaxonomy;
        const matchesTaxon = !selectedTaxon || taxon._id === selectedTaxon;
        
        return matchesTaxonomy && matchesTaxon ? taxon.products : [];
      }) || []
    );

  return (
    <main className="my-12">
      <div className="space-y-12">
        <TaxonomyFilter 
          taxonomies={taxonomies} 
          selectedTaxonomyId={selectedTaxonomy as string}
          selectedTaxonId={selectedTaxon as string}
        />

        <ProductCardGrid products={filteredProducts} />
      </div>
    </main>
  );
}
