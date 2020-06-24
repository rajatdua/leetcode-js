/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
    if(map.has(nums[i])) {
      let val = map.get(nums[i]);
      map.set(nums[i], val + 1)
    }else{
      map.set(nums[i], 1)
    }
  }
  let maxValue = -Infinity, maxKey = nums[0];
  map.forEach((value, key) => {
    if(maxValue < value) { maxValue = value; maxKey = key; }
  });
  return maxKey;
};

console.log(majorityElement( [3,2,3])); // 3
console.log(majorityElement( [2,2,1,1,1,2,2])); // 2
console.log(majorityElement( [4,1,1,1,1,1,2,2])); // 1


/**
 * @param {number[]} nums
 * @return {number}
 */
// A little memory efficient
const majorityElementEff = function(nums) {
  let index = 0, count = 1;
  for(let i = 1; i < nums.length; i++){
    if(nums[i] === nums[index]) count++;
    else count--;
    if(count === 0){
      index = i;
      count = 1;
    }
  }
  return nums[index];
};

console.log(majorityElementEff( [3,2,3])); // 3
console.log(majorityElementEff( [2,2,1,1,1,2,2])); // 2
console.log(majorityElementEff( [4,1,1,1,1,1,2,2])); // 1
