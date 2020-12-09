/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// time - o(n) and space - o(1)
const searchRange = function(nums, target) {
  let result  = [-1, -1];

  // find the index of the leftmost appearance of `target`.
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      result[0] = i;
      break;
    }
  }

  // if the last loop did not find any index, then there is no valid range
  // and we return [-1, -1].
  if (result[0] === -1) {
    return result;
  }

  // find the index of the rightmost appearance of `target` (by reverse
  // iteration). it is guaranteed to appear.
  for (let j = nums.length-1; j >= 0; j--) {
    if (nums[j] === target) {
      result[1] = j;
      break;
    }
  }

  return result;
};

console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // [-1, -1]
console.log(searchRange([], 6)); // [-1, -1]
