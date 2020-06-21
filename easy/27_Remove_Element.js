/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let i = 0, length = nums.length;
  while (i < length){
    if(nums[i] === val){
      nums[i] = nums[length - 1];
      length--;
    } else i++;
  }
  return length;
};

// won't be accepted by leetcode
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const filterSolution = function(nums, val){
  // in-place as it is required but internally it creates a new space so the reference is changed, I suppose.
  nums = nums.filter(item => item !== val);
  return nums.length;
};

console.log(removeElement([1,2,3,2,2,3,4,5,5,6,7,4], 4)); // 10
console.log(filterSolution([1,2,3,2,2,3,4,5,5,6,7,4], 4)); // 10

console.log(removeElement([1,2,2,3,1], 1)); // 3
console.log(filterSolution([1,2,2,3,1], 1)); // 3
