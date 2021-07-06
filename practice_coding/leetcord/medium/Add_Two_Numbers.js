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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let ans = new ListNode(),
    a = l1,
    b = l2;
  let dummy = ans,
    u = 0;
  while (a !== null || b !== null || u !== 0) {
    let k = (a !== null ? a.val : 0) + (b !== null ? b.val : 0) + u;
    let v = k % 10;
    u = (k - v) / 10;
    a = a !== null ? a.next : a;
    b = b !== null ? b.next : b;
    dummy.val = v;
    if (a !== null || b !== null || u !== 0) {
      dummy.next = new ListNode();
      dummy = dummy.next;
    }
  }
  return ans;
};
// Runtime: 124 ms, faster than 85.57% of JavaScript online submissions for Add Two Numbers.
// Memory Usage: 44.2 MB, less than 51.02% of JavaScript online submissions for Add Two Numbers.
