/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function(n, start) {
  let res = [];
  for (let i = 0; i < n; i++){
    res[i] = start + 2 * i;
  }
  let xor = 0;
  for(let i = 0; i < res.length; i++){
    xor = xor ^ res[i];
  }
  return xor;
};


console.log(xorOperation(5, 0)); // 8
console.log(xorOperation(1, 7)); // 7
console.log(xorOperation(10, 5)); // 2
