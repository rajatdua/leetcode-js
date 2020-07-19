/**
 * @param {string} s
 * @return {string}
 */
const reformat = function(s) {
  const letters = s.match(/[a-zA-Z]/g) || [];
  const nums = s.match(/[0-9]/g) || [];
  if(Math.abs(letters.length - nums.length) > 1) return '';
  let arr1, arr2, res = [];
  if(letters.length >= nums.length){
    arr1 = letters;
    arr2 = nums;
  }else{
    arr2 = letters;
    arr1 = nums;
  }
  for(let i = 0; i < arr1.length; i++){
    res.push(arr1[i]);
    if (arr2[i]) res.push(arr2[i]);
  }
  return res.join('')
};

console.log(reformat('a0b1c2')); // a0b1c2
console.log(reformat('j')); // j
console.log(reformat('x17')); // 1x7


// a0b1c2
// array of digits
// array of alphabets
