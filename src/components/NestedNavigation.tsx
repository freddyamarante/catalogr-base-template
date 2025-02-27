'use client';

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

interface NestedNavigationProps {
  data: {
    name: string;
    childLinks?: Array<{
      _type: "externalLink";
      name?: string | null
      link?: string | null;
      openInNewTab?: boolean | null;
      _key: string;
    } | {
      _type: "internalLink";
      name?: string | null;
      link?: {
        _type: string;
        slug?: string | null;
      } | null;
      anchor?: string;
      _key: string;
    }>;
  };
}

const NestedNavigation: React.FC<NestedNavigationProps> = ({ data }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <InternalLink data={{ ...data, _type: "internalLink", _key: "root" }} className="text-lg font-bold">
              {data.name}
            </InternalLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative grid gap-3 p-4 grid-cols-2 w-max">
              {data.childLinks?.map((child) => {
                if (child?._type === 'internalLink') {
                  return (
                    <li key={child._key} className="w-max">
                      <InternalLink data={{
                        ...child,
                        link: child.link && child.link.slug ? {
                          _type: child.link._type,
                          slug: child.link.slug,
                          } : undefined
                        }} 
                      className="text-lg font-bold" />
                    </li>
                  );
                } else if (child?._type === 'externalLink') {
                  return (
                    <li key={child._key} className="w-max">
                      <ExternalLink data={{ ...child, name: child.name || undefined, openInNewTab: child.openInNewTab ?? undefined }} className="text-lg font-bold" />
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NestedNavigation;