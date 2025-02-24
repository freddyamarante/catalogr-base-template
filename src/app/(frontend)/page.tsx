// src/app/page.tsx
import CmsSection from "@/components/CmsSection";
import { client } from "@/sanity/lib/client";
import { Sections } from "../../../sanity.types";
import { HOME_QUERY } from "@/lib/queries";

type Section = Sections[number];

const options = { next: { revalidate: 60 } };

export default async function Home() {
    const home = await client.fetch(HOME_QUERY, {}, options);

    return (
    <>
      {home?.sections?.map((section: Section, index: number) => (
        <CmsSection key={index} data={section} />
      ))}
    </>
    );
}