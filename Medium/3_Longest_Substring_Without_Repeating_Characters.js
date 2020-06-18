/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let length = s.length, ans = 0;
  const map = new Map();
  for(let i = 0, j = 0; j < length; j++){
    if(map.has(s[j])){
      i = Math.max(map.get(s[j]), i);
    }
    ans = Math.max(ans, j - i + 1);
    map.set(s[j], j + 1);
  }
  return ans;
};

// { map: Map { 'a' => 4, 'b' => 8, 'c' => 6 } }
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
// { map: Map { 'b' => 5 } }
console.log(lengthOfLongestSubstring('bbbbb')); // 1
// { map: Map { 'p' => 1, 'w' => 6, 'k' => 4, 'e' => 5 } }
console.log(lengthOfLongestSubstring('pwwkew')); // 3
