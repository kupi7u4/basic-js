const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

/*
T = ln(N / N(0)) / k
K = 0.693 / t(1/2)
t(1/2) = 5730 - константа полураспада - HALF_LIFE_PERIOD
N = 15 - начальная активность изотопа - MODERN_ACTIVITY
N(0) = конечная активность - sampleActivity
*/

function dateSample(sampleActivity) {
  const HALF_LIFE_PERIOD = 5730
  const MODERN_ACTIVITY = 15
  let activity = +sampleActivity

  if (typeof(sampleActivity) !== 'string' || isNaN(activity) || activity <= 0 || activity > 15) {
    return false
  } else {
    activity = +sampleActivity
  }

  let years = Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD)
  let res = Math.ceil(years)
  return res
}

module.exports = {
  dateSample
};
