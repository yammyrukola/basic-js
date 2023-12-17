const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value === undefined ? '' : String(value));    
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join(' )~~( ');
    res = '( ' + res + ' )';
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
