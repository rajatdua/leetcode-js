/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function(nums) {
  let map = {}, sum = 0;
  for(let i = 0; i < nums.length; i++){
    if(map[nums[i]]){
      if(map[nums[i]] > 1){
        continue;
      }
      sum = sum - nums[i];
      map[nums[i]] = map[nums[i]] + 1;
    }else{
      map[nums[i]] = 1;
      sum = sum + nums[i];
    }
  }
  return sum;
};

console.log(sumOfUnique([1,1,1,1,1])); // 0
console.log(sumOfUnique([1,2,1,4,1])); // 6
