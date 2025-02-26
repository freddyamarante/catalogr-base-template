import { client } from "@/sanity/lib/client";
import { CATALOG_QUERY } from "@/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Home() {
    const CATALOG_QUERY = await client.fetch(CATALOG_QUERY, {}, options);

    return (
        <>
        </>
    );
}