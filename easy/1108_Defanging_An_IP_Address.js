/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = function(address) {
  let newStr = '';
  for (let i = 0; i < address.length; i++) {
    if(address[i] === '.') newStr = newStr + "[.]";
    else newStr = newStr + address[i]
  }
  return newStr;
};

console.log(defangIPaddr("1.1.1.1")); // 1[.]1[.]1[.]1
console.log(defangIPaddr("255.100.50.0")); // 255[.]100[.]50[.]0

