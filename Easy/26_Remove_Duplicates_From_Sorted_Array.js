/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  const length = nums.length;
  if (length === 0) return 0;
  let i = 0;
  for (let j = 1; j < length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const removeDuplicatesJS = function(nums) {
  nums.splice(0, nums.length, ...(new Set(nums)));
  return nums;
};

console.log(removeDuplicates([1,2,3,4,5,5,5,5,5,6,7,8,8,8,9])); // 9
console.log(removeDuplicatesJS([1,2,3,4,5,5,5,5,5,6,7,8,8,8,9])); // [1,2,3,4,5,6,7,8,9]
