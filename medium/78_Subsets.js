const subsets = (nums) => {
  const result = [];
  const subset = [];
  const dfs = (index) => {
    if (index >= nums.length) {
      // Using map, because it's not copying the dynamic calculated subset and resulting in [], [], []
      result.push(subset.map((item) => item));
    } else {
      // Left Branch - Decision to include in nums[index]
      subset.push(nums[index]);
      dfs(index + 1);

      // Right Branch - Decision to NOT include in nums[index]
      subset.pop();
      dfs(index + 1);
    }
  };
  dfs(0);
  return result;
};

console.log(subsets([1, 2, 3]));
