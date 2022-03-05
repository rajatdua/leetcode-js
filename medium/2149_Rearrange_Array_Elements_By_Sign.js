/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function (nums) {
  let j = 0,
    k = 1;
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[j] = nums[i];
      j += 2;
    } else {
      res[k] = nums[i];
      k += 2;
    }
  }
  return res;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4])); // [3,-2,1,-5,2,-4]
