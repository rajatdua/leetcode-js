/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n^2) solution
const smallerNumbersThanCurrent = function(nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++){
    let count = 0;
    for (let j = 0; j < nums.length; j++){
      if (nums[i] > nums[j]){
        count++
      }
    }
    result[i] = count
  }
  return result
};


console.log(smallerNumbersThanCurrent([6, 3, 2, 4]));

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) solution
const smallerNumbersThanCurrentEfficient = function(nums) {
  let count = Array(101).fill(0);
  for(let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }
  for(let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }
  for(let i = 0; i<nums.length; i++){
    nums[i] = (nums[i] === 0) ? 0 : count[nums[i]-1];
  }
  return nums;
};

console.log(smallerNumbersThanCurrentEfficient([6, 3, 2, 4]));
