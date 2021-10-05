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
var insertionSortList = function (head) {
  let arr = [],
    k = 0;
  while (head !== null) {
    if (arr.length > 0) {
      let c = k;
      for (let i = 0; i < k; i++) {
        if (head.val >= arr[i].val) {
          c = i;
          break;
        }
      }
      arr.splice(c, 0, head);
      k++;
    } else {
      arr.push(head);
      k++;
    }
    head = head.next;
  }
  let ans = null;
  for (let i of arr) {
    i.next = ans;
    ans = i;
  }
  return ans;
};

// Runtime: 162 ms, faster than 18.24% of JavaScript online submissions for Insertion Sort List.
// Memory Usage: 41.1 MB, less than 57.23% of JavaScript online submissions for Insertion Sort List.
