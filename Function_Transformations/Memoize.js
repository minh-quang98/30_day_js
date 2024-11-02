/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
  
   return function(...args) {
    const key = JSON.stringify(args);
    
    // check xem biến đã được truyền bao giờ chưa
    // nếu có thì return kết quả đã lưu
    if (key in cache) {
        return cache[key];
    }
      
    const result = fn(...args);
    cache[key] = result;
      
    return result;
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