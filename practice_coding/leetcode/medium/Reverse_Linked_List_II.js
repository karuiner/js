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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let ans = null,
    sub = ans,
    check = false;
  let rv = null,
    ck = true,
    rvt,
    i = 1;

  while (head !== null) {
    if (i === left) {
      check = true;
    }
    if (check) {
      rv = new ListNode(head.val, rv);
      if (ck) {
        rvt = rv;
        ck = false;
      }
    } else {
      if (sub === null) {
        ans = new ListNode(head.val);
        sub = ans;
      } else {
        sub.next = new ListNode(head.val);
        sub = sub.next;
      }
    }
    if (i === right) {
      if (sub === null) {
        ans = rv;
      } else {
        sub.next = rv;
      }
      sub = rvt;

      check = false;
    }

    head = head.next;
    i++;
  }
  return ans;
};

// Runtime: 52 ms, faster than 99.89% of JavaScript online submissions for Reverse Linked List II.
// Memory Usage: 42.7 MB, less than 6.67% of JavaScript online submissions for Reverse Linked List II.
