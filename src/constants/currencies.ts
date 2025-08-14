// currencies.ts placeholder
// src/constants/currencies.ts

export type Currency = {
  code: string;
  symbol: string;
  name: string;
  locale: string;
};

export const CURRENCIES: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", locale: "en-US" },
  { code: "EUR", symbol: "€", name: "Euro", locale: "de-DE" },
  { code: "GBP", symbol: "£", name: "British Pound", locale: "en-GB" },
  { code: "INR", symbol: "₹", name: "Indian Rupee", locale: "en-IN" },
  { code: "JPY", symbol: "¥", name: "Japanese Yen", locale: "ja-JP" },
];

export const DEFAULT_CURRENCY: Currency = CURRENCIES[3]; // INR by default

/**
 * Format price based on currency code
 */
export function formatPrice(
  amount: number,
  currencyCode: string = DEFAULT_CURRENCY.code,
  locale: string = DEFAULT_CURRENCY.locale
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(amount);
}
