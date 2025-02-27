'use client';

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import InternalLink, { InternalLinkProps } from "./InternalLink";
import ExternalLink, { ExternalLinkProps } from "./ExternalLink";

interface NestedNavigationProps {
  data: {
    name: string;
    childLinks?: Array<InternalLinkProps["data"] | ExternalLinkProps["data"]>;
  };
}

const NestedNavigation: React.FC<NestedNavigationProps> = ({ data }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <InternalLink data={data} className="text-lg font-bold">
              {data.name}
            </InternalLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="relative grid gap-3 p-4 grid-cols-2 w-max">
              {data.childLinks?.map((child) => {
              if (child?._type === 'internalLink') {
                return (
                <li key={child._key} className="w-max">
                  <InternalLink data={child} className="text-lg font-bold" />
                </li>
                );
              } else if (child?._type === 'externalLink') {
                return (
                <li key={child._key} className="w-max">
                  <ExternalLink data={child} className="text-lg font-bold" />
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