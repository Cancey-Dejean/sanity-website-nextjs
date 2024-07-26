import { InternalUrl } from "@/types"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}

export const getHref = (
  internalUrl: InternalUrl | null,
  customUrl?: string
): string => {
  if (customUrl) {
    return customUrl
  }
  if (!internalUrl) {
    return ""
  }
  const { _type, currentSlug } = internalUrl.url
  switch (_type) {
    case "homepage":
      return "/"
    case "page":
      return `/${currentSlug}`
    case "blog":
      return `blog/${currentSlug}`
    default:
      return ""
  }
}
