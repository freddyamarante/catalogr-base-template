'use client'

import React, {useEffect} from "react";
import Logo from "./Logo";
import { useSettings } from "./context/SettingsContext";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";
import { HEADER_QUERY } from "@/lib/queries";
import { client } from "@/sanity/lib/client";
import { HEADER_QUERYResult } from "../../sanity.types";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import NestedNavigation from "./NestedNavigation";

const Header: React.FC = () => {
  const settings = useSettings()
  const [header, setHeader] = React.useState<HEADER_QUERYResult>(null)

  useEffect(() => {
    async function getHeader() {
      const header = await client.fetch(HEADER_QUERY, {})
      setHeader(header)
    }
    getHeader()

  }, [])

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
    )
  }

  return (
    <header className="w-full h-fit mt-10 px-3 sm:px-24">
      <div className="flex items-center justify-between h-full rounded-3xl">
        <Link className="w-fit h-fit" href="/" onClick={() => window.location.href = '/'}>
          <Logo svg={settings.logo || ''} size={header.logoSize || 'auto'} />
        </Link>

        <nav className="flex justify-end items-center gap-x-4">
          {header.navigation?.map((navItem) => {
            if (!navItem) return null
            
            switch(navItem._type) {
              case 'externalLink':
                return (
                  <div key={navItem._key} className="relative group">
                    <ExternalLink
                      data={navItem}
                      className="text-sm hover:text-primary"
                    />
                  </div>
                )
              
              case 'internalLink':
                return (
                  <div key={navItem._key} className="relative group">
                    <InternalLink
                      data={{
                        ...navItem,
                        link: navItem.link ? {
                          _type: navItem.link._type,
                          slug: navItem.link.slug, 
                        } : undefined
                      }}
                      className="text-sm hover:text-primary"
                    />
                  </div>
                )
              
              case 'nestedNavigation':
                return (
                  <div key={navItem._key} className="relative group">
                    <NestedNavigation data={navItem} />
                  </div>
                )
              
              default:
                return null
            }
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;