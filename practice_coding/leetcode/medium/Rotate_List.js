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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  let n = 0,
    arr = [];
  while (head !== null) {
    n++;
    arr.push(head.val);
    head = head.next;
  }
  k = n - (k % n);

  arr = [...arr.slice(k), ...arr.slice(0, k)];
  let ans = null,
    sub = null;
  for (let i of arr) {
    n--;
    if (ans === null) {
      sub = new ListNode(i);
      ans = sub;
    } else {
      sub.val = i;
    }
    if (n > 0) {
      sub.next = new ListNode();
      sub = sub.next;
    }
  }

  return ans;
};

// Runtime: 132 ms, faster than 14.58% of JavaScript online submissions for Rotate List.
// Memory Usage: 44.3 MB, less than 36.09% of JavaScript online submissions for Rotate List.
