class EventEmitter {
  constructor() {
    this.events = {};
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const listeners = this.events[eventName];
    listeners.push(callback);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  /**
   * Emits an event and calls all subscribed callbacks with the provided arguments.
   * @param {string} eventName
   * @param {Array} args
   * @return {Array} An array of results from the callbacks
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return []; 
    }

    return this.events[eventName].map(callback => callback(...args));
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */