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
var oddEvenList = function (head) {
  let ans = null,
    left = ans,
    tail = null,
    right = tail,
    c = 0;
  while (head !== null) {
    if (c % 2 === 0) {
      if (c === 0) {
        ans = new ListNode(head.val);
        left = ans;
      } else {
        left.next = new ListNode(head.val);
        left = left.next;
      }
    } else {
      if (c === 1) {
        tail = new ListNode(head.val);
        right = tail;
      } else {
        right.next = new ListNode(head.val);
        right = right.next;
      }
    }
    head = head.next;
    c++;
  }
  if (c > 0) {
    left.next = tail;
    return ans;
  } else if (c === 1) {
    return ans;
  } else {
    return head;
  }
};

// Runtime: 68 ms, faster than 99.89% of JavaScript online submissions for Odd Even Linked List.
// Memory Usage: 45.2 MB, less than 5.63% of JavaScript online submissions for Odd Even Linked List.
