/**
 * HITUNG ALFABET
 * ==============
 * 
 * Function hitungAlfabet memiliki input sebuah kalimat (string).
 * Function ini bertugas menghitung panjang kalimat tersebut serta menghitung huruf vokal dan huruf kosonan pada input.
 * 
 * Huruf vokal: A E I O U.
 * Huruf kosonan : merupakan huruf alfabet selain huruf vokal.
 * (huruf upper & lower case diperhitungkan)
 * 
 * Output dari function ini merupakan object dengan key huruf dan panjang. 
 * Lebih jelasnya, perhatikan test case yang telah diberikan.
 * 
 * RULES :
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

function hitungAlfabet(str) {
  // Your code here
  let newString = str.toLowerCase();
  let vokal = 0;
  let konsonan = 0;
  let vokalLetter = 'aiueo';
  let konsonanLetter = 'bcdfghjklmnpqrstvwxyz'
  for(let i = 0; i < newString.length; i++) {
    for(let j = 0; j < vokalLetter.length; j++) {
      if(newString[i] === vokalLetter[j]) {
        vokal ++
      }
    }
    for(let j = 0; j < konsonanLetter.length; j++) {
      if(newString[i] === konsonanLetter[j]) {
        konsonan ++
      }
    }
  }
  let object = {
    huruf : {
      vokal,
      konsonan
    },
    panjang: str.length
  }

  return object
}

console.log(hitungAlfabet('javascript!'));
// {
//   huruf: {
//     vokal: 3,
//     konsonan: 7
//   },
//   panjang: 11
// }

console.log(hitungAlfabet('When I get older losing my hair'));
// // {
// //   huruf: {
// //     vokal: 9,
// //     konsonan: 16
// //   },
// //   panjang: 31
// // }

console.log(hitungAlfabet('2020 20 20 ## && +'));
// // {
// //   huruf: {
// //     vokal: 0,
// //     konsonan: 0
// //   },
// //   panjang: 18
// // }

module.exports = hitungAlfabet;
