/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
  let sum = 0;
  return new Promise(resolve => {
      Promise.all([promise1, promise2]).then((values) => {
          values.forEach( num => {
              sum += num;
          })
          resolve(sum)
      });
  })
};

/**
* addTwoPromises(Promise.resolve(2), Promise.resolve(2))
*   .then(console.log); // 4
*/