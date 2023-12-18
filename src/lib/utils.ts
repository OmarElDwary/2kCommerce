import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EGP" | "EUR" | "SAR",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
) {
  const { currency = "EGP", notation = "compact" } = options

  const Fprice = typeof price === "string" ? parseFloat(price) : price
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    notation,
    maximumFractionDigits: 2,
  }).format(Fprice)
}