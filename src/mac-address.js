const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let code = ['A', 'B', 'C', 'D', 'E', 'F']
  let arr = n.split('-')
  let count = 0

  if (arr.length !== 6) {
    return false
  }
  arr.map((el) => {
    if (isNaN(el[0])) {
      code.indexOf(el[0]) !== -1 ? count += 1 : false
    } else {
      el[0] <= 9 ? count += 1 : false
    }

    if (isNaN(el[1])) {
      code.indexOf(el[1]) !== -1 ? count += 1 : false
    } else {
      el[1] <= 9 ? count += 1 : false
    }
  })
  return count === 12  
}

isMAC48Address('00-1B-63-84-45-E6') // true


module.exports = {
  isMAC48Address
};
