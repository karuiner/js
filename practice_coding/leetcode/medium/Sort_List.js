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
var sortList = function (head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => b - a);
  let ans = null;
  for (let i of arr) {
    ans = new ListNode(i, ans);
  }
  return ans;
};

// Runtime: 136 ms, faster than 94.05% of JavaScript online submissions for Sort List.
// Memory Usage: 57.7 MB, less than 17.84% of JavaScript online submissions for Sort List.
