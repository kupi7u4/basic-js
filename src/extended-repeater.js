const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' } = {}) {
  let res = []
  let additionArr = []

  if (addition === undefined && addition !== null) {  
    for (let i = 0; i < repeatTimes; i++) {
      res.push(String(str))
    }   
  } else {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr.push(String(addition))
    }
    let strWithAddition = String(str) + additionArr.join(additionSeparator)
    for (let i = 0; i < repeatTimes; i++) {
      res.push(strWithAddition)
    }   
  }

  return res.join(separator)
}

repeater('single', { repeatTimes: 1 }) // 'la+la+la'

module.exports = {
  repeater
};
