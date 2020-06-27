/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function(num) {
  let mask = Math.pow(2, num.toString(2).length) - 1;
  return ~num & mask;
};

console.log(findComplement(5)); // 2
console.log(findComplement(1)); // 0

const toBinary = decimalNumber => parseInt(decimalNumber.toString(2));
const doComplementAndDecimal = binaryNumber => {
  let stringNumber = binaryNumber.toString(), arr = [];
  for (let i = 0; i < stringNumber.length; i++){
    arr[i] = parseInt(stringNumber[i]) ^ 1;
  }
  let combined = arr.join('');
  return parseInt(combined, 2);
};


/**
 * @param {number} num
 * @return {number}
 */
const findComplementO = function(num){
  return doComplementAndDecimal(toBinary(num));
};

console.log(findComplementO(5)); // 2
console.log(findComplementO(1)); // 0

