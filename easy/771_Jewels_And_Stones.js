/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  const jewelMap = new Map();
  let count = 0;
  for (let i = 0; i < J.length; i++){
    if(!jewelMap.has(J[i])){
      jewelMap.set(J[i],i);
    }
  }
  for (let i = 0; i < S.length; i++){
    if(jewelMap.has(S[i])){
      count++;
    }
  }
  return count;
};


console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("z", "ZZ")); // 0
