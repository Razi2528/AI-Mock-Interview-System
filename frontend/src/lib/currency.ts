export type Currency = 'USD' | 'INR';

const SYMBOLS: Record<Currency, string> = {
  USD: '$',
  INR: '₹',
};

// Default static conversion rate. You can update this later or load dynamically.
// 1 USD = 83.5 INR (example rate)
let conversionRates: Record<Currency, Record<Currency, number>> = {
  USD: { USD: 1, INR: 83.5 },
  INR: { INR: 1, USD: 1 / 83.5 },
};

export function setConversionRate(from: Currency, to: Currency, rate: number) {
  conversionRates = {
    ...conversionRates,
    [from]: {
      ...conversionRates[from],
      [to]: rate,
    },
  };
}

export function convertCurrency(amount: number, from: Currency, to: Currency) {
  if (from === to) return amount;
  const rate = conversionRates[from]?.[to];
  if (!rate) return amount;
  return amount * rate;
}

export function formatCurrency(amount: number, currency: Currency) {
  const symbol = SYMBOLS[currency] ?? '';
  // Show without decimals for whole values, otherwise 2 decimals
  const formatted = Math.abs(amount) % 1 === 0 ? amount.toString() : amount.toFixed(2);
  return `${symbol}${formatted}`;
}
