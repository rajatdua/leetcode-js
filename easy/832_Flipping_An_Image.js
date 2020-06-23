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

//TODO: Implement Reverse And Invert

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const getReversed = (A) => A;
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const getInverted = (A) => A;


console.log(flipAndInvertImage([
  [1,1,0],
  [1,0,1],
  [0,0,0]
]));
