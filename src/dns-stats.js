const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};

  for (let domain of domains) {
    const parts = domain.split('.').reverse();
    
    for (let i = 1; i <= parts.length; i++) {
      let compositeDomain = '';
    
      for (j = 0; j < i; j++) {
        compositeDomain += '.' + parts[j];
      }            
      res[compositeDomain] = res[compositeDomain] ? res[compositeDomain] + 1 : 1;
      
    }
  }

  return res;
}

module.exports = {
  getDNSStats
};
