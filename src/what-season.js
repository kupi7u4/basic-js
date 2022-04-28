const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season = [['winter', 'spring', 'summer', 'autumn'],
                [[11, 0, 1], [2, 3, 4], [5, 6, 7], [8, 9, 10]]
               ]
  let strNotDate = 'Unable to determine the time of year!'
  let monthNum
  let res = ''

  if (date === undefined) {
    res = strNotDate
  } else {
    date[Symbol.toStringTag] !== undefined ? getError() :  getSeasonNew(date)
    // обработка на ошибку (ключ [Symbol.toStringTag] из тестов)
  } 
  function getSeasonNew(date) {
    try {
      monthNum = date.getMonth()
    } catch (err) {
      getError()
    }  
    for (let i = 0; i < 4; i++) {
      if (season[1][i].indexOf(monthNum) !== -1) {
        res = season[0][i]
        break
      }
    }
  }
  function getError() {
    throw new Error('Invalid date!')
  }
  return res
}

module.exports = {
  getSeason
};
