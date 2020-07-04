
/**
 * @param {number} number
 * @return {boolean}
 */
const isSelfDividing = number => {

  // My solutions - Doesn't work

  // let x = number;
  // while(x > 0){
  //   let d = Math.ceil(x % 10);
  //   x = x / 10;
  //   if(d === 0 || (number % d) > 0) return false;
  // }
  // return true;

  // let numArray = number.toString().split('');
  // for(let i = 0; i < numArray.length; i++){
  //   return !(Number(numArray[i]) === 0 || number % Number(numArray[i]) !== 0);
  // }

  // AtlasCoughed - Leetcode Solution
  return number.toString().split('').every((letter) => {
    return !(Number(letter) === 0 || number % Number(letter) !== 0);
  })

};
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function(left, right) {
  let result = [];
  for(let i = left; i <= right; i++){
    if(isSelfDividing(i)) result.push(i);
  }
  return result;
};


console.log(selfDividingNumbers(1, 22));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
