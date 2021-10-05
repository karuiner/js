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
var deleteDuplicates = function (head) {
  if (head === null) return head;
  let ans = null,
    dummy = ans;
  while (head !== null) {
    if (dummy !== null) {
      if (head.val > dummy.val) {
        dummy.next = new ListNode(head.val);
        dummy = dummy.next;
      }
    } else {
      ans = new ListNode(head.val);
      dummy = ans;
    }

    head = head.next;
  }
  return ans;
};

// Runtime: 88 ms, faster than 76.20% of JavaScript online submissions for Remove Duplicates from Sorted List.
// Memory Usage: 41.2 MB, less than 5.24% of JavaScript online submissions for Remove Duplicates from Sorted List.
