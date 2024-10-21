/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  handleSum = (a, b) => {
      return a ;
  }

  handleFib = (n) => {
      if (n > 1) {
          return (n - 1) + (n - 2);
      } else {
          return 1;
      }
  }

  handleFactorial = (n) => {
      if (n > 1) {
          return (n - 1) * n;
      } else {
          return 1;
      }
  }

  return function(...args) {
      switch (fn) {
          case "sum": return handleSum(...args);
          case "fib": return handleFib(...args);
          case "factorial": return hanldeFactorial(...args);
          default: return;
      }
  }
}


/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/