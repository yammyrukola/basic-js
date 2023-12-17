const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  function _getMineAmount(row, col) {
    let mineAmount = 0;
    for (let i = row-1; i <= row + 1; i++) {
      for (let j = col-1; j <= col +1; j++) {
        if (i === row && j === col) continue;
        mineAmount += Boolean(matrix[i]?.[j]) ? 1 : 0;
      }
    }
    return mineAmount;  
  }

  const rows = matrix.length;
  const cols = matrix[0].length;
  mineMatrix = [];

  for (let row = 0; row < rows; row++) {
    const rowArray = [];
    for (let col = 0; col < cols; col++) {
      rowArray.push(_getMineAmount(row, col));
    }
    mineMatrix.push(rowArray);
  }
  
  return mineMatrix;
}

module.exports = {
  minesweeper
};
