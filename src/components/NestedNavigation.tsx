// components/NestedNavigation.tsx
'use client';

import InternalLink, {type InternalLinkProps } from "./InternalLink";
import ExternalLink, {type ExternalLinkProps} from "./ExternalLink";


interface NestedNavigationProps {
  data: InternalLinkProps | ExternalLinkProps;
}

const NestedNavigation: React.FC<NestedNavigationProps> = ({ data }) => {
  return (
    <div className="relative group">
      <InternalLink
        data={data}
        className="text-sm hover:text-primary"
      />
      {data.childLinks && (
        <div className="absolute hidden group-hover:block bg-background p-4 rounded-lg shadow-lg">
          {data.childLinks.map((child: any) => {
            switch(child._type) {
              case 'internalLink':
                return (
                  <InternalLink
                    key={child._key}
                    data={child}
                    className="block py-2 text-sm hover:text-primary"
                  />
                )
              case 'externalLink':
                return (
                  <ExternalLink
                    key={child._key}
                    data={child}
                    className="block py-2 text-sm hover:text-primary"
                  />
                )
              default:
                return null
            }
          })}
        </div>
      )}
    </div>
  )
}

export default NestedNavigation;