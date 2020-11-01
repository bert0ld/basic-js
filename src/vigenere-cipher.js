const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
 constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Not value');
    let str_encrypt = '';
    let index;
    let key_index = 0;
    message = message.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < message.length; i ++) {
      if (key_index >= key.length) key_index = 0;
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 122 || (message.charCodeAt(i) > 90 && message.charCodeAt(i) < 97) ) {
        str_encrypt += message[i];
      } else {
        index = message.charCodeAt(i) - 97 + key.charCodeAt(key_index);
        if (index >= 123) index -= 26;
        str_encrypt += (String.fromCharCode(index)).toUpperCase();
        key_index += 1
      }
    }
    return (this.type === true)?str_encrypt:str_encrypt.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Not value decrypt');
    let str_decrypt = '';
    let index;
    let key_index = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < message.length; i ++) {
      if (key_index >= key.length) key_index = 0;
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 122 || (message.charCodeAt(i) > 90 && message.charCodeAt(i) < 97) ) {
        str_decrypt += message[i];
      } else {
        index = message.charCodeAt(i) - key.charCodeAt(key_index) + 65;
        if (index < 65) index += 26;
        str_decrypt += String.fromCharCode(index);
        key_index += 1
      }
    }
    return (this.type === true)?str_decrypt:str_decrypt.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
