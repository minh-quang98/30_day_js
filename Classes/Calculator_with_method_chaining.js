class Calculator {

  /** 
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
    this.continues = true;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    if (this.continues) {
      this.result = this.result + value;
      return this;
    }
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    console.log('value', value, 'result', this.result)
    if (this.continues) {
      this.result = this.result - value;
      return this;
    }
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    if (this.continues) {
      this.result = this.result * value;
      console.log(value, this.result)
      return this;
    }
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value == 0) {
      this.continues = false;
    } else {
      this.result = this.result / value;
    }
    return this;
  }

  /** 
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    if (this.continues) {
      this.result = Math.pow(this.result, value);
      return this;
    }
  }

  /** 
   * @return {number}
   */
  getResult() {
    if (this.continues) {
      return this.result;
    } else {
      return 'Division by zero is not allowed';
    }
  }
}