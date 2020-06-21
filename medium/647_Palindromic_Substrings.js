/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
  let length = s.length;
  if(length < 1) return length;
  let vector = new Array(length), count = 0;

  // creating 1d array
  for (let i = 0; i < vector.length; i++) {
    vector[i] = new Array(length);
  }

  // initializing 2d vector
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      vector[i][j] = false;
    }
  }

  for(let i = length - 1; i >= 0; i--){
    for(let j = i; j <= length - 1; j++){
      if(i === j || (s[i] === s[j] && (j-i<2 || vector[i+1][j-1]))){
        vector[i][j] = true;
        count++;
      }
    }
  }
  return count;
};

// creates a 2D vector of the string combinations

console.log(countSubstrings('abc')); // 3 total count
/*
[
  true false false
  false true false
  false false true
]
 */
