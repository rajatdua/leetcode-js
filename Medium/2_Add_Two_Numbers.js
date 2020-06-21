const { ListNode } = require('../Utils');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let carry = 0, sum = 0, a = l1, b = l2;
  let head = new ListNode(0);
  let now = head;
  while (a !== null || b !== null) {
    sum = (a ? a.val : 0) + (b ? b.val : 0) + carry;
    carry = Math.floor(sum / 10);
    now.next = new ListNode(sum % 10);
    now = now.next;
    a = a ? a.next : null;
    b = b ? b.next : null;
  }
  if (carry) now.next = new ListNode(carry);
  return head.next;
};


const l1 = new ListNode(2);
l1.next = new ListNode(4);

const l2 = new ListNode(4);
l2.next = new ListNode(5);

console.log(addTwoNumbers(l1, l2));
// ListNode { val: 6, next: ListNode { val: 9, next: null } }
