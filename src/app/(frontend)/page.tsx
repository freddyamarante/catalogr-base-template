// src/app/page.tsx
import CmsSection from "@/components/CmsSection";
import { client } from "@/sanity/lib/client";
import { Section } from "../../../sanity.types";

async function getHomeData() {
    const query = `*[_type == "home"][0] {
        _id,
        _type,
        sections[] {
            ...
        }
    }`;
    return client.fetch(query);
}

export default async function Home() {
    const home = await getHomeData();

    return (
    <>
      {home?.sections?.map((section: Section, index: number) => (
        <CmsSection key={index} data={section} />
      ))}
    </>
    );
}