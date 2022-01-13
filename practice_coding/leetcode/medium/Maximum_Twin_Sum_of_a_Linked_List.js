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
 * @return {number}
 */

var pairSum = function (head) {
  let [s, f] = [head, head];
  while (f !== null) {
    s = s.next;
    f = f.next;
    if (f !== null) {
      f = f.next;
    }
  }
  let [l, r] = [null, s];
  while (r !== null) {
    let p = r.next;
    r.next = l;
    l = r;
    r = p;
  }
  let ans = 0;
  while (l !== null) {
    let k = head.val + l.val;
    if (k > ans) {
      ans = k;
    }
    head = head.next;
    l = l.next;
  }
  return ans;
};

// Runtime: 225 ms, faster than 67.07% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
// Memory Usage: 72.6 MB, less than 77.25% of JavaScript online submissions for Maximum Twin Sum of a Linked List.

var pairSum = function (head) {
  let arr = [],
    c = 0;
  while (head !== null) {
    //arr = [...arr, head.val];// 입력 방식에 따른 효율성 문제.
    arr[c] = head.val;
    head = head.next;
  }
  let ans = 0,
    n = Math.floor(0.5 * c);
  for (let i = 0; i < n; i++) {
    let k = arr[i] + arr[c - i - 1];
    if (k > ans) {
      ans = k;
    }
  }
  return ans;
};

// Runtime: 179 ms, faster than 95.81% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
// Memory Usage: 85.1 MB, less than 58.68% of JavaScript online submissions for Maximum Twin Sum of a Linked List.
