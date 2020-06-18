/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// brute force solution time complexity - O(n^2)
const twoSumBrute = function (nums, target) {
  const length = nums.length;
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if(nums[i] + nums[j] === target){
        return [nums[i], nums[j]];
      }
    }
  }
};

console.log(twoSumBrute([1, 7, 11, 2], 9));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// linear time complexity - O(n)
const twoSum = function(nums, target) {
  const length = nums.length;
  const complementMap = new Map();
  for(let i = 0; i < length; i++){
    let complement = target - nums[i];
    if(complementMap.has(complement)){
      return [ nums[i], nums[complementMap.get(complement)]];
    }
    complementMap.set(nums[i], i);
  }
};


console.log(twoSum([2, 7, 11, 1], 9));
console.log(twoSum([1, 7, 2, 5], 3));
