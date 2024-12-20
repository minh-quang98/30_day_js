/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
  let result = [];
  let count = 0
  return new Promise((resolve, reject) => {
      for (let i = 0; i < functions.length; i++) {
          functions[i]().then(res => {
              result.push({
                  index: i,
                  value: res
              });
              count += 1
              if (count === functions.length ) {
                  resolve(result.sort((a, b) => a.index - b.index).map(item => item.value))
              }
          })
          .catch(err => {
              reject(err)
          }) 
      }
  })
};

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/