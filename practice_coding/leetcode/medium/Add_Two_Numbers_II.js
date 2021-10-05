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
  let v1 = [],
    v2 = [];
  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      v1 = [l1.val, ...v1];
      l1 = l1.next;
    }
    if (l2 !== null) {
      v2 = [l2.val, ...v2];
      l2 = l2.next;
    }
  }
  let ans,
    k = 0,
    c = 0,
    z = 0,
    nv = 7;

  while (v1[k] !== undefined || v2[k] !== undefined || c > 0) {
    let a = v1[k] ? v1[k] : 0,
      b = v2[k] ? v2[k] : 0;
    z = a + b + c;
    nv = z % 10;
    c = Math.floor(z / 10);
    ans = new ListNode(nv, ans);
    k++;
  }

  return ans;
};

// Runtime: 128 ms, faster than 82.39% of JavaScript online submissions for Add Two Numbers II.
// Memory Usage: 46.7 MB, less than 10.43% of JavaScript online submissions for Add Two Numbers II.
