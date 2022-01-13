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

// 효율성 문제 - 입력 되는 linked list 의 길이가 긴경우 생성하는 배열의 길이도 길어지기에
// 그러한 배열의 크기가 속도를 느리는게 하는듯하다.
// var pairSum = function (head) {
//   let arr = [];
//   while (head !== null) {
//     arr = [...arr, head.val];
//     head = head.next;
//   }
//   let ans = 0,
//     n = arr.length,
//     hn = 0.5 * n;
//   for (let i = 0; i < hn; i++) {
//     let k = arr[i] + arr[n - i - 1];
//     if (k > ans) {
//       ans = k;
//     }
//   }
//   return ans;
// };
