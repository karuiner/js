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
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let i = [],
    j = [],
    k = [],
    li = 0;
  while (list1 !== null || list2 !== null) {
    if (list1 !== null) {
      if (li < a) {
        i = [list1.val, ...i];
      } else if (li > b) {
        k = [list1.val, ...k];
      }
      list1 = list1.next;
      li++;
    }
    if (list2 !== null) {
      j = [list2.val, ...j];
      list2 = list2.next;
    }
  }
  let ans;
  for (let s of [...k, ...j, ...i]) {
    ans = new ListNode(s, ans);
  }
  return ans;
};

// Runtime: 4872 ms, faster than 5.14% of JavaScript online submissions for Merge In Between Linked Lists.
// Memory Usage: 63.1 MB, less than 6.54% of JavaScript online submissions for Merge In Between Linked Lists.
