import sections from "@/sanity/lib/globals/sectionResolver";
import { client } from "@/sanity/lib/client";
import { PAGE_QUERY } from "@/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const page = await client.fetch(PAGE_QUERY, {}, options);

  return (
    <>
      {page?.sections?.map((section, index) => {
        const SectionComponent = sections[section._type];

        if (!SectionComponent) {
          console.error(`Component not found for section type: ${section._type}`);
          return null;
        }

        return <SectionComponent key={index} {...section} />;
      })}
    </>
  );
}