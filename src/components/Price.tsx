'use client'

import { useSettings } from "./context/SettingsContext"

interface PriceProps {
  priceUSD?: number;
  priceBs?: number;
  className?: string;
}

export const Price: React.FC<PriceProps> = ({ priceUSD, priceBs, className }) => {
  const settings = useSettings()

  return (
    <div className={className}>
      {settings.currency === 'USD' && (
        <h3 className='font-black line-clamp-1'>${priceUSD}</h3>
      )}
      {settings.currency === 'Bs' && (
        <h3 className='font-black line-clamp-1'>{priceBs} Bs.</h3>
      )}
    </div>
  )
}

export default Price;