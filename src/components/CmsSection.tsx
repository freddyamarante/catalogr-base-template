import React from "react";
import { sections } from "@/sanity/lib/globals/sectionResolver";
import { Section } from "../../sanity.types";

interface CmsSectionProps {
  data: Section;
}

const CmsSection: React.FC<CmsSectionProps> = ({ data }) => {
  const SectionComponent = sections[data._type];

  const uniqueId = React.useMemo(() => `section-${Math.random().toString(36).substr(2, 9)}`, []);

  return (
    <>
      {data.settings && !data.settings.hide && (
        <section
          id={`section-${uniqueId}`}
          data-section-type={data._type}
          className="relative bg-background text-text"
          style={{
            paddingTop: `${data.settings?.padding?.top || 0}px`,
            paddingBottom: `${data.settings?.padding?.bottom || 0}px`,
          }}
        >
          {SectionComponent ? (
            <SectionComponent {...data} />
          ) : (
            <div>
              <p>Section component for {data._type} not found</p>
            </div>
          )}
        </section>
      )}

      {data.settings?.customCss && (
        <style dangerouslySetInnerHTML={{ __html: String(data.settings.customCss) }} />
      )}
    </>
  );
};

export default CmsSection;