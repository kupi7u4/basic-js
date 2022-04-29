const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

//  * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
//  * `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
//  * `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
//  * `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.

function transform(arr) {
let actionArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
let newArr = arr.slice()
let res = []

for (let i = 0; i < newArr.length; i++) {
   
  (actionArr.indexOf(newArr[i]) === -1) ? res.push(newArr[i]) : comleteControls(i)

  console.log(i)

  function comleteControls(i) {
    if (newArr[i] === actionArr[0]) {
      i++
    } else if (newArr[i] === actionArr[1]) {
      res.splice(-1, 1)
    } else if (newArr[i] === actionArr[2]) {
      res.push(newArr[i+1])
    } else if (newArr[i] !== actionArr[3]) {
      if (newArr[i-1] === res[res.length - 1]) {
        res.push(newArr[i-1])
      }      
    } 
  }

}

console.log(res)     
return res
}

transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]) // [1, 2, 3, 4, 5]

module.exports = {
  transform
};
