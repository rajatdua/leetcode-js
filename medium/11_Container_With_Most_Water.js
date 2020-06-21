/*
  Pointer Approach
 */

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let left = 0, right = height.length - 1, maxVal = 0;
  while(left < right){
    let containWater = (right - left)*Math.min(height[left], height[right]);
    maxVal = Math.max(containWater, maxVal);
    if(height[left] >= height[right]){
      right--;
    }else{
      left++;
    }
  }
  return maxVal;
};

/*
Solution explanation mentioned in leetcode -

Initially we consider the area constituting the exterior most lines. Now, to maximize the area, we need to consider the area between the lines of larger lengths.
If we try to move the pointer at the longer line inwards, we won't gain any increase in area, since it is limited by the shorter line.
But moving the shorter line's pointer could turn out to be beneficial, as per the same argument, despite the reduction in the width.
This is done since a relatively longer line obtained by moving the shorter line's pointer might overcome the reduction in area caused by the width reduction.
 */
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
