/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
  if(haystack.length < 1 && needle.length < 1 ) return 0;
  if(haystack.length < 1) return -1;
  if(needle.length < 1) return 0;

  let pointer = 0;
  for(let i=0; i<haystack.length; i++){
    if(haystack[i] === needle[pointer]) {
      if(pointer === (needle.length -1)) return (i-pointer);
      else pointer++;
    } else if(pointer > 0) {
      i = i - pointer;
      pointer = 0;
    }
  }
  return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const stupidSolution = function(haystack, needle) {
  return haystack.indexOf(needle);
};


console.log(strStr('hello', 'll')); // 2
console.log(strStr('aaaaa', 'bba')); // -1
