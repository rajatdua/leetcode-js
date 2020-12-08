/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
  let firstIndexOfSuffix, rightMostSuccessorOfPivotIndex = 0;
  if(nums.length  < 2){
    return;
  }

  // [0, 1, 2, 5, 3, 3, 0] (this loop will give index of 5)
  for(let i = nums.length - 1; i >= 0; i--){
    if(nums[i] > nums[i - 1]){
      firstIndexOfSuffix = i;
      break;
    }
  }

  // if there is any index which is non-increasing in the suffix do something else reverse the array
  if(firstIndexOfSuffix) {
    // find the pivot which is left of the index of suffix hence minus 1 so (2 in the above array) (index 3)
    let pivotIndex = firstIndexOfSuffix - 1;
    let pivotElement = nums[pivotIndex];

    // find the first element in the suffix which is greater than pivot ( so the element index 5, which is 3 )
    for (let i = nums.length - 1; i >= firstIndexOfSuffix; i--) {
      if (nums[i] > pivotElement) {
        rightMostSuccessorOfPivotIndex = i;
        break;
      }
    }

    // swap the pivot and the first element we found above [0, 1, 3, 5, 3, 2, 0]   (2 <-> 3) (index 3 and index 5)
    let ogPivot = nums[pivotIndex];
    nums[pivotIndex] = nums[rightMostSuccessorOfPivotIndex];
    nums[rightMostSuccessorOfPivotIndex] = ogPivot;

    // reverse the suffix array which is from index 4 to 6
    let d = (nums.length - 1 - firstIndexOfSuffix) / 2;

    for (let i = 0; i < d; i++) {
      let temp = nums[firstIndexOfSuffix + i];
      nums[firstIndexOfSuffix + i] = nums[nums.length - 1 - i];
      nums[nums.length - 1 - i] = temp;
    }
    // [0, 1, 3, 0, 2, 3, 5] // ANSWER
  }else{
    nums.reverse();
  }
};


nextPermutation([0, 1, 2, 5, 3, 3, 0]); // [0, 1, 3, 0, 2, 3, 5]
