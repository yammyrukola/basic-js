const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let column = 0; column < cols; column++) {
    for (let row =0; row < rows; row++) {
      
      const value = matrix[row][column];
      if (!value) {
        break;
      }
      sum += matrix[row][column];

    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
