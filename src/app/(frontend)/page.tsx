import React from "react";
import { client } from "@/sanity/lib/client";
import { HOME_QUERY } from "@/lib/queries";
import sections from "@/sanity/lib/globals/sectionResolver";

const options = { next: { revalidate: 60 } };

export default async function Home() {
  const home = await client.fetch(HOME_QUERY, {}, options);

  return (
    <>
      {home?.sections?.map((section, index) => {
        const SectionComponent = sections[section._type];
        const uniqueId = `${section._type}-${index}`;

        if (!SectionComponent) {
          console.error(`Component not found for section type: ${section._type}`);
          return null;
        }

        return (
          <React.Fragment key={index}>
            {section.settings && (
              <section
                id={`section-${uniqueId}`}
                data-section-type={section._type}
                className="relative bg-background text-text"
                style={{
                  paddingTop: `${section.settings?.padding?.top || 0}px`,
                  paddingBottom: `${section.settings?.padding?.bottom || 0}px`,
                }}
              >
                <SectionComponent {...section} />
              </section>
            )}

            {section.settings?.customCss && (
              <style dangerouslySetInnerHTML={{ __html: String(section.settings.customCss) }} />
            )}
          </React.Fragment>
        );
      })}
    </>
  );
}