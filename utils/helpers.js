/** Helper functions */

/**
 * Formats a number to a string with USD 
 * Example:
 * toUSD(10.32) => $10.32  
 */
export const toUSD = num => new Intl.NumberFormat('en-US', { 
  style: 'currency',
  currency: 'USD',
}).format(num);

/** 
 * Formats a number to a percentage with up to 2 decimal places.
 * ex: 
 * toPercent(20.02) => 20.02%
 */
export const toPercent = num => new Intl.NumberFormat( 'en-US', {
  style: 'percent',
  minimumFractionDigits:2,
}).format(num);

/**
 * Takes two arrays and merges them into a single array of arrays.
 * Arrays must be the same length.
 * 
 * example:
 *  arr1 = [ 1, 2, 3, 4, 5]
 *  arr2 = [ 6, 7, 8, 9, 10]
 *  zip(arr1, arr2) => 
 *    [ [1, 6],
 *      [2, 7],
 *      [3, 8],
 *      [4, 9],
 *      [5, 10] ]
 */
export function zip (arr1, arr2) {
  // if (arr2.length !== arr1) throw new Error('Arrays must be equal lengths');
  const zippedArray = []; 
  for ( let i = 0; i < arr1.length; i++ ) { 
    zippedArray.push([arr1[i], arr2[i]]);
  }
  return zippedArray;
}