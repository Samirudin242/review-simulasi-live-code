/**
 * SPLIT MANUAL
 * ============
 * 
 * Buatlah function split manual yang menerima parameter string, dan juga parameter split.
 * 
 * Contoh 1:
 *   - Input  : splitManual('ayam,kucing,kuda,capung,kentang', ',')
 *   - Output : ['ayam', 'kucing', 'kuda', 'capung', 'kentang']
 * 
 * Contoh 2:
 *   - Input  : splitManual('kuda;naga;kucing;ayam', ';')
 *   - Output : ['kuda', 'naga', 'kucing', 'ayam']
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

function splitManual(string, opt) {
  //Your code here
  let newArry = [];
  let newString = '';
  for(let i = 0; i < string.length; i++) {
    if(string[i] !== opt) {
      newString += string[i]
    } else if (string[i] === opt) {
      newArry.push(newString);
      newString = '';
    }
  }
  newArry.push(newString)
  return newArry
}

// console.log(splitManual('ayam,kucing,kuda,capung,kentang', ','));
// // ['ayam', 'kucing', 'kuda', 'capung', 'kentang']

// console.log(splitManual('kuda;naga;kucing;ayam', ';'));
// ['kuda', 'naga', 'kucing', 'ayam']

console.log(splitManual('ayam+kucing,kuda,capung,kentang+kucing', 'k'));
// ['ayam', 'kucing,kuda,capung,kentang', 'kucing']

module.exports = splitManual;
