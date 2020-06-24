/*
 [
   [4,3,2,-1],
   [3,2,1,-1],
   [1,1,-1,-2],
   [-1,-1,-2,-3]
 ]
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(n^2) solution
const countNegatives = function(grid) {
  let count = 0;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++){
      if(grid[i][j] < 0){
        count++;
      }
    }
  }
  return count;
};

console.log(countNegatives( [
  [4,3,2,-1],
  [3,2,1,-1],
  [1,1,-1,-2],
  [-1,-1,-2,-3]
])); // 8



/**
 * @param {number[][]} grid
 * @return {number}
 */
// O(row + col) solution
const countNegativesEff = function(grid) {
  let row = grid.length, col = grid[0].length, i = 0, j = col - 1, count = 0;
  while(i < row && j >= 0) {
    if(grid[i][j] < 0){
      count += (row - 1) - i + 1;
      j--;
    } else i++;
  }
  return count;
};


console.log(countNegativesEff( [
  [4,3,2,-1],
  [3,2,1,-1],
  [1,1,-1,-2],
  [-1,-1,-2,-3]
])); // 8
