/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  let expectObject = {
      toBe: (data) => {
          if (data !== val) {
              throw new Error("Not Equal");
          } else {
              return data === val;
          }
      },
      notToBe: (data) => {
          if (data !== val) {
              return true;
          } else {
              throw new Error("Equal");
          }
      }
  }
  return expectObject;
};

/**
* expect(5).toBe(5); // true
* expect(5).notToBe(5); // throws "Equal"
*/