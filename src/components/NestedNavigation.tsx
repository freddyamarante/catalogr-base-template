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
    _type: "nestedNavigation";
    name?: string | null;
    link?: {
      _type: string;
      slug?: string | null;
    } | null;
    childLinks?: Array<{
      _type: "externalLink" | "internalLink";
      name?: string | null;
      link?: {
        _type: string;
        slug?: string | null;
      } | string | null;
      openInNewTab?: boolean | null;
      anchor?: string;
      _key: string;
    } | null> | null;
    _key: string;
  };
}

const NestedNavigation: React.FC<NestedNavigationProps> = ({ data }) => {
  return (
    <NavigationMenu className="custom-navigation-menu">
      <NavigationMenuList>
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger>
            <InternalLink
              data={{ ...data, _type: "internalLink", _key: "root" }}
              className="text-lg font-bold"
            >
              {data.name}
            </InternalLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative grid gap-3 p-4 grid-cols-2 w-max">
              {data.childLinks?.map((child) => {
                if (child?._type === "internalLink") {
                  return (
                    <li key={child._key} className="w-full">
                      <InternalLink
                        data={child as Extract<typeof child, { _type: "internalLink" }>}
                        className="text-lg font-bold"
                      />
                    </li>
                  );
                } else if (child?._type === "externalLink") {
                  return (
                    <li key={child._key} className="w-full">
                      <ExternalLink
                        data={child as Extract<typeof child, { _type: "externalLink" }>}
                        className="text-lg font-bold"
                      />
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