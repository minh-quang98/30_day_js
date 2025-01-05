/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
  if (n === 0) return arr;
  let result = [];
  flatten(arr, result, n)
  return result;
};

function flatten(arr, result, n) {
  for (const item of arr) {
    if (Number.isInteger(item)) {
      result.push(item);
    } else {
      if (Array.isArray(item) && n > 0) {
        flatten(item, result, n-1);
      } else {
        result.push(item);
      }
    }
  }
}