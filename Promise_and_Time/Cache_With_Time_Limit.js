var TimeLimitedCache = function() {
  this.listItem = new Map();
};

/** 
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function(key, value, duration) {
  const found = this.listItem.has(key);
  if (found) {
     clearTimeout(this.listItem.get(key).time);
  }
  // The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.
  this.listItem.set(key, {
      value: value,
      time: setTimeout(() => this.listItem.delete(key), duration)
  });
  return found;
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
  if (this.listItem.has(key)) {
      return this.listItem.get(key).value;
  } else {
      return -1;
  }
};

/** 
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function() {
  return this.listItem.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/