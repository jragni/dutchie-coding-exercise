/** Helper functions */

export const toUSD = num => new Intl.NumberFormat('en-US', { 
  style: 'currency',
  currency: 'USD',
}).format(num);

export const toPercent = num => new Intl.NumberFormat( 'en-US', {
  style: 'percent',
  minimumFractionDigits:2,
}).format(num);