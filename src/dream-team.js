const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const res = members
    .filter((item) => typeof item === 'string')
    .map((item) => item.trim().at(0).toUpperCase())
    .filter((item) => item.match(/[A-Z]/))
    .sort()
    .join('');

  if (res === '') return false;

  return res;
}

module.exports = {
  createDreamTeam
};
