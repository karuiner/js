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
var reverseList = function (head) {
  let ans = null;
  while (head !== null) {
    ans = new ListNode(head.val, ans);
    head = head.next;
  }

  return ans;
};

// Runtime: 80 ms, faster than 81.70% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 40.4 MB, less than 73.03% of JavaScript online submissions for Reverse Linked List.
