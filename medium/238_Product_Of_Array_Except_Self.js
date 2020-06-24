/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  let len = nums.length, output = Array(len).fill(1), left = 1, right = 1;
  for(let i = 0; i < len - 1; i++) {
    left *= nums[i];
    right *= nums[len - i - 1];
    output[i + 1] *= left;
    output[len - i - 2] *= right;
  }
  return output;
};
/*
Ex - [1,2,3,4]

left visualized as array after traversal - [1, 1, 2, 6]
1, X, X, X
1, 1, X, X
1, 1, 2, X
1, 1, 2, 6


right visualized as array after traversal - [24, 12, 4, 1]
X, X, X, 1,
X, X, 4, 1
X, 12, 4, 1
24, 12, 4, 1


[1 1 2 6] * [24 12 4 1] = [24, 12, 8, 6]

 */

console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]
