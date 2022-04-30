const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = Array.from(n)
  arr.map(el => Number(el))

  // n.map(el => x += el, x = 0)

  console.log(arr)
    // if (n < 10) {
    //   console.log('остановились, итог ', n)
    //   return sum
    // } else {
    //   for (let i = 0; i < arr.length; i++) {
    //     parseInt(arr[i])
    //     console.log()
    //   }
    //   // arr.map((el) => getSumOfDigits(n + +el))
    // }

}

getSumOfDigits(913)

module.exports = {
  getSumOfDigits
};
