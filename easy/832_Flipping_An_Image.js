/*
OG Array
[
  [1,1,0],
  [1,0,1],
  [0,0,0]
]
Step - 1: Reversed
[
  [0,1,1],
  [1,0,1],
  [0,0,0]
]
Step - 2: Inverted
[
  [1,0,0],
  [0,1,0],
  [1,1,1]
]
 */

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function(A) {
  let reversed = getReversed(A);
  return getInverted(reversed);
};


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const getReversed = (A) => {
  for(let i = 0; i < A.length; i++) {
    let start = 0, end = A[i].length - 1;
    while (start < end)
    {
      let temp = A[i][start];
      A[i][start] = A[i][end];
      A[i][end] = temp;
      start++;
      end--;
    }
  }
  return A;
};
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const getInverted = (A) => {
  for(let i = 0; i < A.length; i++){
    for(let j = 0; j < A[i].length; j++){
      A[i][j] = A[i][j] ^ 1;
    }
  }
  return A;
};


console.log(flipAndInvertImage([
  [1,1,0],
  [1,0,1],
  [0,0,0]
]));
