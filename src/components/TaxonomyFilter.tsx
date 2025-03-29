/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';

const TaxonomyFilter = ({
  taxonomies,
  selectedTaxonomyId,
  selectedTaxonId
}: {
  taxonomies: any[];
  selectedTaxonomyId: string;
  selectedTaxonId: string;
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = (taxonomyId: string, taxonId: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('taxonomyId', taxonomyId);
    params.set('taxonId', taxonId);
    return params.toString();
  };

  return (
    <div
      className="flex gap-4 overflow-x-scroll hide-scrollbar"
      style={{ touchAction: 'pan-x' }}
    >
      <Link
        href={pathname}
        className={`flex text-nowrap justify-center items-center text-center px-4 py-1 text-xl font-semibold rounded-full ${!selectedTaxonomyId && !selectedTaxonId
          ? 'text-background bg-text'
          : ''
          }`}
      >
        Todo
      </Link>
      {taxonomies.map((taxonomy) => (
        <div key={taxonomy._id} className="flex flex-row gap-4">
          {taxonomy.taxons?.map((taxon: any) => {
            if (taxon.products?.length < 0 || !taxon.products) {
              return null;
            }
            return (
              <Link
                key={taxon._id}
                href={`${pathname}?${createQueryString(taxonomy._id, taxon._id)}`}
                className={`flex text-nowrap justify-center items-center text-center px-4 py-1 text-xl font-semibold rounded-full ${selectedTaxonomyId === taxonomy._id && selectedTaxonId === taxon._id
                  ? 'text-background bg-text'
                  : ''
                  }`}
              >
                {taxon.name}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default TaxonomyFilter;