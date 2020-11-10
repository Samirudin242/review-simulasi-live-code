/**
 * UNIQUE DUPLICATE FINDER
 * =======================
 * 
 * uniqueDuplicateFinder adalah sebuah function yang menerima satu parameter berupa kalimat. 
 * Function akan memberikan return object yang berisi setiap kumpulan kata-kata unik dan duplicate yang ditemukan dalam kalimat.
 * 
 * Contoh:
 *   - Input  : uniqueFinder('saya dan SAYA suka makan nasi'))
 *   - Output : {
 *       unique: [ 'dan', 'suka', 'makan', 'nasi' ],
 *       duplicate: [ 'saya' ]
 *     }
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

function uniqueDuplicateFinder(str) {
  // Your code here
  const newString = str.toLowerCase();
  let array = [];
  let string = '';
  for(let i = 0; i <= newString.length; i++) {
    if(newString[i] === " " || i == newString.length) {
      array.push(string);
      string = '';
    } else if (newString[i] !== " ") {
      string += newString[i];
    }
  }

  let unique = [];
  let duplicate = [];

  for(let i = 0; i < array.length; i++) {
    for(let j = i; j < array.length; j++) {
      if(array[i] === array[j] && i !== j) {
        duplicate.push(array[i]);
      }
    }
    if(array[i] !== duplicate[0]) {
      unique.push(array[i]);
    }
  }

  return {
    unique,
    duplicate
  }
  

}

console.log(uniqueDuplicateFinder('saya dan SAYA suka makan nasi'));
// {
//   unique: ['dan', 'suka', 'makan', 'nasi'],
//   duplicate: ['saya']
// }


console.log(uniqueDuplicateFinder('dia percaya aku percaya'));
// {
//   unique: ['dia', 'aku'],
//   duplicate: ['percaya']
// }

module.exports = uniqueDuplicateFinder;
