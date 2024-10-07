/**
 * @param {Function[]} functions
 * @return {Function}
 */

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// vd: fn(x) = f(g(h(x))) {} thì phải tính được kết quả của h rồi mới tính được g, được f.
var compose = function(functions) {
  return function(x) {
     for (let i = functions.length -1; i >= 0; i --) {
          x = functions[i](x);
     }
     return x;
  }
};

/**
* const fn = compose([x => x + 1, x => 2 * x])
* fn(4) // 9
*/