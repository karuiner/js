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
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  let arr = [],
    ans = [-1, -1],
    k = 0,
    p = -1,
    min = -1;

  while (head !== null) {
    if (arr.length < 2) {
      arr.push(head.val);
    } else {
      if (arr.length === 2) {
        arr = [arr[0], arr[1], head.val];
      } else {
        arr = [arr[1], arr[2], head.val];
      }
      if (
        (arr[0] > arr[1] && arr[2] > arr[1]) ||
        (arr[0] < arr[1] && arr[2] < arr[1])
      ) {
        if (p === -1) {
          p = k;
          min = k;
        } else {
          let s = k - p;
          p = k;
          if (ans[0] === -1) {
            ans = [s, s];
          }
          if (s < ans[0]) {
            ans[0] = s;
          }
          if (k - min > ans[1]) {
            ans[1] = k - min;
          }
        }
      }
    }
    k++;
    head = head.next;
  }
  return ans;
};
// Runtime: 259 ms, faster than 20.00% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.
// Memory Usage: 84.6 MB, less than 53.33% of JavaScript online submissions for Find the Minimum and Maximum Number of Nodes Between Critical Points.
