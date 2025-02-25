import CmsSection from "@/components/CmsSection";
import { client } from "@/sanity/lib/client";
import { Sections } from "../../../../sanity.types";
import { PAGE_QUERY } from "@/lib/queries";

type Section = Sections[number];

const options = { next: { revalidate: 60 } };

export default async function Home() {
    const page = await client.fetch(PAGE_QUERY, {}, options);

    return (
    <>
      {page?.sections?.map((section: Section, index: number) => (
        <CmsSection key={index} data={section} />
      ))}
    </>
    );
}