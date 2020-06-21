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
const mergeTwoLists = function(l1, l2) {
  let a = l1, b = l2, head = new ListNode(-1);
  let now = head;
  while(a && b){
    if(a.val >= b.val){
      head.next = b;
      b = b.next;
    } else {
      head.next = a;
      a = a.next;
    }
    head = head.next;
  }

  if(a) head.next = a;
  else head.next = b;

  return now.next;
};

const l1 = new ListNode(2);
l1.next = new ListNode(4);

const l2 = new ListNode(4);
l2.next = new ListNode(5);

console.log(mergeTwoLists(l1, l2));
