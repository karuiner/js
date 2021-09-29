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
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }
  let ans = [],
    n = arr.length,
    r = n % k,
    u = (n - r) / k;
  for (let i = 0; i < k; i++) {
    let p = i < r ? u + 1 : u;
    let sub = arr.slice(0, p);
    arr = arr.slice(p);
    let nh = null;
    for (let j = p - 1; j >= 0; j--) {
      nh = new ListNode(sub[j], nh);
    }
    ans.push(nh);
  }

  return ans;
};

// Runtime: 88 ms
// Memory Usage: 41.1 MB
