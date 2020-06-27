const { Stack } = require('./Stack');

function ListNode (val, next){
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next)
}

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right)
 }


module.exports = {
  ListNode,
  Stack,
  TreeNode
};
