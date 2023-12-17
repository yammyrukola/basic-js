const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';

  str = [...str].reverse();
  let chain = [];
  let char = str.pop();

  chain.push({char, amount: 1});
  while(char = str.pop()) {
    lastChar = chain[chain.length - 1];
    if (char === lastChar.char) {
      lastChar.amount += 1;
      continue;
    }
    chain.push({char, amount: 1});
  }

  chain = chain
    .map((item) => `${item.amount === 1 ? '' : item.amount}${item.char}`)
    .join('');

  return chain;
}

module.exports = {
  encodeLine
};
