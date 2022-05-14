/*
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let ans = new ListNode(),
    k = 0,
    sub = ans;
  while (head !== null) {
    if (head.val !== 0) {
      k += head.val;
    } else if (head.val === 0 && k !== 0) {
      if (sub.val === 0) {
        sub.val = k;
      } else {
        sub.next = new ListNode(k);
        sub = sub.next;
      }
      k = 0;
    }
    head = head.next;
  }

  return ans;
};
// Runtime: 722 ms, faster than 29.51% of JavaScript online submissions for Merge Nodes in Between Zeros.
// Memory Usage: 96.2 MB, less than 82.43% of JavaScript online submissions for Merge Nodes in Between Zeros.
