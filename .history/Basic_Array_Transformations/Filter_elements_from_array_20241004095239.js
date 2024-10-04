/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    let item = fn(arr[i], i);
    if (item) {
      result.push(arr[i]);
    }
  }
  return result;
};