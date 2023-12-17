const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {    
  const newNames = [];
  
  const getIndex = (itemName) => {    
    return itemName.match(/\(([0-9]+)\)$/)?.[1];    
  };

  for (itemName of names) {
    let postfixItemName = itemName;
    const nameIndex = getIndex(itemName);
    if (nameIndex) {
      const baseName = itemName.slice(0, itemName.lastIndexOf('('));
      const baseAmount = names.filter((item) => item === baseName).length;      
      if (baseAmount > nameIndex) {
        postfixItemName = `${itemName}(${nameIndex})`
      }
    }
    
    const amountInNewNames = newNames.filter((item) => item.oldName === itemName).length;
    
    if (!amountInNewNames) {
      newNames.push({oldName: itemName, newName: postfixItemName});
    } else {
      newNames.push({oldName: itemName, newName: `${postfixItemName}(${amountInNewNames})`});
    }
  }
  const res = newNames.map((item) => item.newName);
  
  return res;
}

module.exports = {
  renameFiles
};
