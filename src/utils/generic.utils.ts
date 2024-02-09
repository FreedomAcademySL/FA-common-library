export type ValueChecker = <T>(value: T) => boolean;

const defaultChecker: ValueChecker = (value) => {
  return value !== undefined && value !== null && value !== '';
};

/**
 * Validate if value is defined. It will check by default if value is different from undefined, null or empty string, the check can be customized.
 * @param value value to validate if is defined
 * @param valueChecker the value checker to use.
 */
export function def<T>(
  value: T,
  valueChecker: ValueChecker = defaultChecker,
): boolean {
  return valueChecker(value);
}

/**
  Retrieve a Model Type, special for populate Model inside other Model.
 */

/**
 * This function works as a helper to create range arrays in order to use them for iteration.
 * @param endIndex the end index to stop
 * @param startIndex the optional start index. Default value is 0
 */
export function range(endIndex: number, startIndex = 0): number[] {
  if (endIndex < startIndex) {
    throw new Error('Start index should be lower than end index');
  }
  const result: number[] = [];
  for (let index = startIndex; index < endIndex; index++) {
    result.push(index);
  }
  return result;
}

export function defObject<T>(object: T, fields: (keyof T)[] = []): boolean {
  if (!def(object)) {
    return false;
  }
  for (const field of fields) {
    const value = object[field];
    if (!def(value)) {
      return false;
    }
  }
  return true;
}

export function toCamelCase(text: string): string {
  return text.replace(/^([A-Z])|[\s-_]+(\w)/g, function (match, p1, p2) {
    if (p2) return p2.toUpperCase();
    return p1.toLowerCase();
  });
}

/**
 * Group an array by a given key.
 * @param {T[]}arrayToGroup array to be grouped and transformed to a Map.
 * @param {string} key key to group by. If two elements of the array have the same value inside that key will be grouped.
 * @param itemToExclude optional function to exclude determinate item from be grouped in the given array.
 * @returns {Map<V, T>} returns a Map, with N keys depends on the N different values inside that key for each element in the array.
 * @example  const inventory = [
 *                    { name: 'asparagus', type: 'vegetables', quantity: 5 },
 *                    { name: 'bananas', type: 'fruit', quantity: 0 },
 *                    { name: 'goat', type: 'meat', quantity: 23 },
 *                    { name: 'cherries', type: 'fruit', quantity: 5 },
 *                    { name: 'fish', type: 'meat', quantity: 22 },
 *                ];
 *            groupBy(inventory, 'name');
 */

export const groupBy = <T, V = unknown>(
  arrayToGroup: T[],
  key: keyof T,
  itemToExclude?: (item: T) => boolean,
): Map<V, T[]> => {
  return arrayToGroup.reduce(function (arrayGrouped, each) {
    if (itemToExclude && itemToExclude(each)) return arrayGrouped;
    arrayGrouped.set(
      each[key],
      arrayGrouped.get(each[key])
        ? [...arrayGrouped.get(each[key]), each]
        : [each],
    );
    return arrayGrouped;
  }, new Map());
};

export const calculateTotalPages = (
  quantityOfResult: number,
  perPage: number,
) => Math.ceil(quantityOfResult / perPage) || 1;
