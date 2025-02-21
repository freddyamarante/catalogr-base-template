import { twMerge } from "tailwind-merge"
import { dataset, projectId } from "@/sanity/env"
import createImageUrlBuilder from "@sanity/image-url"

import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { clsx, type ClassValue } from "clsx"

const builder = createImageUrlBuilder({ projectId, dataset })

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}