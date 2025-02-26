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
          <NavigationMenuTrigger>{data.name}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {data.childLinks?.map((child) => {
                if (child?._type === 'internalLink') {
                  return (
                    <li key={child._key}>
                      <InternalLink data={child} />
                    </li>
                  );
                } else if (child?._type === 'externalLink') {
                  return (
                    <li key={child._key}>
                      <ExternalLink data={child} />
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