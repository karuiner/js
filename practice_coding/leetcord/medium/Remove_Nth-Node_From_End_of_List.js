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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let arr = [],
    k = 0;
  while (head !== null) {
    arr = [head.val, ...arr];
    head = head.next;
    k++;
  }
  let ans = null;
  for (let i = 0; i < k; i++) {
    if (i !== n - 1) {
      ans = new ListNode(arr[i], ans);
    }
  }

  return ans;
};

// Runtime: 72 ms, faster than 92.79% of JavaScript online submissions for Remove Nth Node From End of List.
// Memory Usage: 40.4 MB, less than 17.82% of JavaScript online submissions for Remove Nth Node From End of List.
