const { TreeNode } = require('../utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function(root) {
  return traverseTreeAndSumLeftLeaves(root);
};

const isLeaf = node => {
  if (!node) return false;
  return (node.left === null && node.right === null);
};

const traverseTreeAndSumLeftLeaves = (root, sum=0) => {
  if (!root) return sum;
  if (isLeaf(root)) return sum;
  if (root.left) {
    if (isLeaf(root.left)) {
      sum += root.left.val;
      traverseTreeAndSumLeftLeaves(root.left, sum);
    } else sum = traverseTreeAndSumLeftLeaves(root.left, sum);
  }
  if (root.right) {
    if (isLeaf(root.right)) return sum;
    else {
      sum = traverseTreeAndSumLeftLeaves(root.right, sum);
    }
  }
  return sum;
};

const tree = new TreeNode(3, 9, new TreeNode(20, 15, 7));
console.log(sumOfLeftLeaves(tree));
