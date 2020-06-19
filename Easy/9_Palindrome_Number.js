/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  let rem, temp = x, final = 0;
  while(x>0) {
    rem = x%10;
    x = Math.floor(x/10);
    final = final*10+rem;
  }
  return final === temp;
};

console.log(isPalindrome(11));
