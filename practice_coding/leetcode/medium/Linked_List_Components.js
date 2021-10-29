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
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function (head, nums) {
  let ans = 0,
    db = {},
    conc = false;
  nums.forEach((x) => {
    db[x] = true;
  });
  while (head !== null) {
    if (conc && db[head.val] === undefined) {
      conc = false;
      ans++;
    } else if (!conc && db[head.val]) {
      conc = true;
    }
    head = head.next;
  }
  return conc ? ans + 1 : ans;
};

// Runtime: 88 ms, faster than 62.07% of JavaScript online submissions for Linked List Components.
// Memory Usage: 43.3 MB, less than 68.97% of JavaScript online submissions for Linked List Components.
