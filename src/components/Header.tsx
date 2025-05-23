// Header.tsx
'use client'

import React, { useEffect } from "react";
import Logo from "./Logo";
import { useSettings } from "./context/SettingsContext";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import NestedNavigation from "./NestedNavigation";
import { HEADER_QUERY } from "@/lib/queries";
import { HEADER_QUERYResult } from "../../sanity.types";
import { client } from "@/sanity/lib/client";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import {
  Sheet, 
  SheetContent,
  SheetTrigger
} from '../components/ui/sheet'
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

const Header: React.FC = () => {
  const settings = useSettings();
  const [header, setHeader] = React.useState<HEADER_QUERYResult>(null);

  useEffect(() => {
    async function getHeader() {
      const header = await client.fetch(HEADER_QUERY, {});
      setHeader(header);
    }
    getHeader();
  }, []);

  if (!header) {
    return (
      <header className="w-full h-fit mt-10 px-3 sm:px-24">
        <div className="flex items-center justify-between h-full rounded-3xl">
          <Link href="/">
            <div className="w-fit h-fit">
              <Skeleton className="w-24 h-12" />
            </div>
          </Link>
          <div className="flex justify-end items-center gap-x-4">
            <Skeleton className="w-16 h-12" />
            <Skeleton className="w-10 h-12" />
            <Skeleton className="w-20 h-12" />
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full h-fit mt-2">
      <div className="flex items-center justify-between h-full border-b border-border py-5 px-4 md:px-24">
        <Link className="w-fit h-fit" href="/" onClick={() => (window.location.href = "/")}>
          <Logo svg={settings.logo || ""} size={header.logoSize || "auto"} className="size-2/3 md:size-full" />
        </Link>

        <nav className="flex justify-end items-center">
          <div className="hidden lg:flex gap-4">
            {header.navigation?.map((navItem) => {
              if (!navItem) return null;

              switch (navItem._type) {
                case "externalLink":
                  return (
                    <div key={navItem._key} className="relative group">
                      <ExternalLink data={navItem} className="text-lg font-bold" />
                    </div>
                  );

                case "internalLink":
                  return (
                    <div key={navItem._key} className="relative group">
                      <InternalLink data={navItem} className="text-lg font-bold" />
                    </div>
                  );

                case "nestedNavigation":
                  return (
                    <div key={navItem._key} className="relative group">
                      <NestedNavigation data={navItem} />
                    </div>
                  );

                default:
                  return null;
              }
            })}
            <div className="relative group">
              <Link href="/cart" className="text-lg font-bold">
                <Button size="icon" variant="outline" className="rounded-lg">
                  <ShoppingCartIcon size={24} />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden w-full">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="rounded-lg">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="grid gap-4 px-4 my-16">
                  {header.navigation?.map((navItem) => {
                    if (!navItem) return null;

                    switch (navItem._type) {
                      case "externalLink":
                        return (
                          <div key={navItem._key} className="relative group">
                            <ExternalLink data={navItem} className="text-lg font-bold" />
                          </div>
                        );

                      case "internalLink":
                        return (
                          <div key={navItem._key} className="relative group">
                            <InternalLink data={navItem} className="text-lg font-bold" />
                          </div>
                        );

                      case "nestedNavigation":
                        return (
                          <div key={navItem._key} className="relative group w-full">
                            <NestedNavigation data={navItem} />
                          </div>
                        );

                      default:
                        return null;
                    }
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;