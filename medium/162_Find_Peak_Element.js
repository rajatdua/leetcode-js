/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  let left = 0, right = nums.length -1;
  while(left < right){
    let mid = Math.floor((left + right) / 2);
    if(nums[mid] > nums[mid + 1]){
      right = mid;
    }else{
      left = mid + 1;
    }
  }
  return left;
};

console.log(findPeakElement([1,2,3,1])); // 2
console.log(findPeakElement([1,2,1,3,5,6,4])); // 1 or 5
