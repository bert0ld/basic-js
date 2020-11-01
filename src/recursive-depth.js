const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;

    for (let elem of arr) {
      let depth = 1;
      if (Array.isArray(elem)) {
        depth += this.calculateDepth(elem);
        counter = (depth > counter) ? depth : counter;
      }
    }
    return counter;
  }
};