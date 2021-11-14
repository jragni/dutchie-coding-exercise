/* Constants for ProductCard */

export const STRAINS_IMAGE = {
  Hybrid: 'static/strain-icons/hybrid.svg',
  HighCBD: 'static/strain-icons/high-cbd.svg',
  Indica: 'static/strain-icons/indica.svg',
  Sativa: 'static/strain-icons/sativa.svg',
}
export const toUSD = num => new Intl.NumberFormat('en-US', { 
  style: 'currency',
  currency: 'USD',
}).format(num);

export const toPercent = num => new Intl.NumberFormat( 'en-US', {
  style: 'percent',
  minimumFractionDigits:2,
}).format(num);