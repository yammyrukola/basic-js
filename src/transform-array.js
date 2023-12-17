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
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");


  const res = []
  for (i = 0; i < arr.length; i++) {
    const el = arr[i];
    
    switch (true) {
      case el === '--discard-next': i++
        break;
      case el === '--discard-prev': (res.length && arr[i-2] !== '--discard-next') && res.pop();
        break;
      case el === '--double-next': (arr[i + 1] !== undefined) && res.push(arr[i + 1]);
        break;
      case el === '--double-prev': (arr[i - 1] !== undefined && (arr[i - 2] !== '--discard-next')) && res.push(res[res.length - 1]);
        break;
      default: res.push(el); 
        break;
    }
  }

  

  return res;
  
}

module.exports = {
  transform
};
