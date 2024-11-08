/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let isCall = true;
  return function(...args){
      if (isCall) {
        isCall = false;
          // ...args truyền nhiều tham số vào hàm
          return fn(...args);
      }
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
