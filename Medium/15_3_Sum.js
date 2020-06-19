/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  let solutions = [], length = nums.length;
  if(length < 3){
    return solutions;
  }
  nums.sort(function (a, b) {
    return a > b ? 1 : -1;
  });

  for(let i = 0; i < length - 2; i++){
    if(i === 0 || nums[i] > nums[i-1]){
      let target = 0 - nums[i];
      let j = i + 1;
      let k = length - 1;

      while(j < k){
        if(nums[j] + nums[k] === target){
          solutions.push([nums[i], nums[j], nums[k]]);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) j++;
          while (j < k && nums[k] === nums[k + 1]) k--;
        } else if(nums[j] + nums[k] < target){
          j++;
        }else{
          k--;
        }
      }

    }
  }
  return solutions;
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// [-4, -1, -1, 0, 1, 2]
/*

-4 (i)
    -1 (i + 1)
        2 (last element)

-3
 */
