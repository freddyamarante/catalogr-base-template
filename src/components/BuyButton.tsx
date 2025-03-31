/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Link from "next/link";

import { Button } from "./ui/button";
import Price from "./Price";

import { cn, getWhatsAppUrl } from "@/lib/utils";
import { useSettings } from "./context/SettingsContext";

interface BuyButtonProps {
  product?: any;
  currentVariant?: any;
  color?: string;
  size?: string;
  className?: string;
}

export const BuyButton: React.FC<BuyButtonProps> = ({ product, currentVariant, className }) => {
  const settings = useSettings()

  return (
    <Link
      href={getWhatsAppUrl(
      [
        {
          product,
          variants: [currentVariant],
        },
      ],
      settings.whatsAppNumber ?? ''
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button type="button" size="2xl" className={cn(className, "flex justify-between py-8 w-full")}>
      <span className="font-bold text-2xl">
        <Price priceUSD={currentVariant.priceUSD} priceBs={currentVariant.priceBs} />
      </span>
      <span className="font-semibold text-xl text-right">
        Comprar
      </span>
      </Button>
    </Link>
  )
}

export default BuyButton;