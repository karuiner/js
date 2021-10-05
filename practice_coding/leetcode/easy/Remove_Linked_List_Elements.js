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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let ans = null,
    arr = [];
  while (head !== null) {
    if (head.val !== val) {
      arr = [head.val, ...arr];
    }

    head = head.next;
  }
  for (let i of arr) {
    if (ans === null) {
      ans = new ListNode(i);
    } else {
      ans = new ListNode(i, ans);
    }
  }

  return ans;
};

// Runtime: 592 ms, faster than 5.53% of JavaScript online submissions for Remove Linked List Elements.
// Memory Usage: 46.8 MB, less than 6.97% of JavaScript online submissions for Remove Linked List Elements.
