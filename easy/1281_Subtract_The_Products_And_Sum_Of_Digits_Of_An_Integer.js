/**
 * @param {number} n
 * @return {number}
 */
const subtractProductAndSum = function(n) {
  let product = 1, sum = 0;
  while(n > 0){
    let last = Math.floor(n % 10);
    product = product * last;
    sum = sum + last;
    n = Math.floor(n / 10);
  }
  return product - sum;
};

console.log(subtractProductAndSum(234)); // 15
console.log(subtractProductAndSum(643)); // 59
