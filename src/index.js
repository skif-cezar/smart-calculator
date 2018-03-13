class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.res = initialValue;
  }

  add(number) {
    // your implementation
    this.res += '+' + number;
    return this;
  }

  subtract(number) {
    // your implementation
    this.res += '-' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.res += '*' + number;
    return this;
  }

  devide(number) {
    // your implementation
    this.res += '/' + number;
    return this;
  }

  pow(number) {
    // your implementation
    this.res += '**' + number;
    return this;
  }
  valueOf() {
        return eval(this.res);
  }
}

module.exports = SmartCalculator;
