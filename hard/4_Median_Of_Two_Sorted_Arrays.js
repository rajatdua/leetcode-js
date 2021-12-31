/**
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
 const merge = (left, right) => {
    let sortedArr = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift())
        }
    }
    return [...sortedArr, ...left, ...right];
};

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const mergeSort = (arr) => {
    const half = arr.length / 2;
    if (arr.length <= 1) return arr;
    const left = arr.splice(0, half);
    const right = arr; 
    return merge(mergeSort(left), mergeSort(right));
};

/**
 * @param {number[]} arr
 * @return {number}
 */
const findMedian = (arr) => {
    const length = arr.length;
    const index = Math.ceil((length/2)-1);
    if (length % 2 ===0) return (arr[index] + arr[index + 1]) / 2
    else return arr[index]
};
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = mergeSort(nums1.concat(nums2));
    return findMedian(mergedArray);
};

console.log(findMedianSortedArrays([1,3], [2])); // 2
