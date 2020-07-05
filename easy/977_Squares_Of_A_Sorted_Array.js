/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortedSquares = function(A) {
  let result = [];
  for(let i = 0; i < A.length; i++){
    result[i] = A[i] * A[i];
  }
  result = result.sort((a, b) => a -b);
  return result;
};

console.log(sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
