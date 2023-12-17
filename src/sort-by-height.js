const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const FIXED = -1;
  const res = [];
  const sortedArr = arr
    .filter((height) => height !== FIXED).sort((a, b) => a - b)
    .reverse();

  for (const value of arr) {
    if (value === FIXED) {
      res.push(FIXED);
      continue;
    } 
    res.push(sortedArr.pop());
  }
  
  return res;
}

module.exports = {
  sortByHeight
};
