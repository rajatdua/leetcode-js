/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = function(s) {
  let bal = 0, count = 0, length = s.length;
  for (let i = 0; i < length; i++) {
    if(s[i] === 'L') bal++;
    else bal--;
    if(bal === 0) count++;
  }
  return count;
};

console.log(balancedStringSplit("RLRRLLRLRL")); // 4
console.log(balancedStringSplit("RLLLLRRRLR")); // 3
console.log(balancedStringSplit("LLLLRRRR")); // 1
console.log(balancedStringSplit("RLRRRLLRLL")); // 2
