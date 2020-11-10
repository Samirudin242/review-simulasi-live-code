/**
 * CAPITAL CASE
 * ============
 *
 * Sebuah fungsi bernama capitalCase akan menerima satu buah parameter yang berupa array of string.
 * Fungsi ini akan mengembalikan array of string yang dimana setiap huruf pertama pada element-nya
 * akan berubah menjadi huruf besar.
 *
 * Example:
 *   - Input  : ['semmi', 'verian', 'putera']
 *   - Output : ['Semmi', 'Verian', 'Putera']
 *
 * RULES :
 *   - Wajib menyertakan pseudocode dan kode program.
 *   - Kerjakan tanpa built-in function kecuali .push(), Number(), String(), .toString(), .toLowerCase(), .toUpperCase().
 */

/**
 * PSEUDOCODE
 * 
 * BEGIM capitalCase
 *    PASS IN: arr as ARRAY
 *    STORE string AS EMPTY STRING
 *    STORE newArry AS EMPTY ARRAY
 *    FOR i FROM 0 TO (LENGTH OF arr INDEX arr MINUS 1) INCREMENT BY 1
 *        FOR j FROM 0 TO (LENGTH OF arr INDEX i MINUS 1) INCREMENT BY 1
 *           IF j EQUAL 0
 *              string CONCAT arr INDEX ij AND MAKE IT UPPERCASE
 *           ELSE 
 *              string CONCAT arr INDEX ij
 *          END IF
 *       END FOR
 *     PUSH string TO newArry
 *     string EQUAL EMPTY STRING
 *   END FOR
 *   PASS OUT newArry
 * END

 * 
 */

function capitalCase(arr) {
  // Your code here
  let string = '';
  let newArry = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if(j === 0) {
        string += arr[i][j].toUpperCase()
      } else {
        string += arr[i][j]
      }
    }
    newArry.push(string)
    string = '';
  }

  return newArry
}

console.log(capitalCase(['semmi', 'verian', 'putera'])); // ['Semmi', 'Verian', 'Putera']
console.log(capitalCase(['Naufal', 'muhaMmad', 'siddiq'])); // ['Naufal', 'MuhaMmad', 'Siddiq']

module.exports = capitalCase;


