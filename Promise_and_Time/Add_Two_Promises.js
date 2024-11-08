/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// Undone
var addTwoPromises = async function(promise1, promise2) {
  let result1 = 0;
  let result2 = 0;
  promise1.then((value) => {
      result1 = value
  })
  promise2.then((value) => {
      result2 = value
  })
  return new Promise(resolve => setTimeout(() => resolve(result1 + result2), 80))
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/