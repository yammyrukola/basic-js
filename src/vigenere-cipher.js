const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  _getCharNumber(char) {
    return char.charCodeAt(0) - 'A'.charCodeAt(0);
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined)  {
      throw new Error('Incorrect arguments!');
    }

    key = key.toUpperCase();
    message = message.toUpperCase();
    const charsAmount = this._getCharNumber('Z') + 1;

    let res = '';
    let counter = -1;
    for (let char of message) {
      if (!char.match(/[A-Z]/i)) {
          res += char; 
          continue;
      }
      counter++;
      counter = (counter >= key.length) ? 0 : counter;
      const charCode = (this._getCharNumber(char) + this._getCharNumber(key[counter])) % charsAmount;
      res += `${String.fromCodePoint('A'.charCodeAt(0) + charCode)}`;
    }
    res = this.direct ? res : [...res].reverse().join('');
    
    return res;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined)  {
      throw new Error('Incorrect arguments!');
    }
    
    key = key.toUpperCase();
    message = message.toUpperCase();
    const charsAmount = this._getCharNumber('Z') + 1;

    let res = '';
    let counter = -1;
    for (let char of message) {
      if (!char.match(/[A-Z]/i)) {
          res += char; 
          continue;
      }
      counter++;
      counter = (counter >= key.length) ? 0 : counter;
      const charCode = (this._getCharNumber(char) + charsAmount - this._getCharNumber(key[counter])) % charsAmount;
      res += `${String.fromCodePoint('A'.charCodeAt(0) + charCode)}`;
    }
    res = this.direct ? res : [...res].reverse().join('');
      
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
