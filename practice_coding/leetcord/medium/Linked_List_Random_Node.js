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
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.arr = [];
  this.n = 0;
  while (head !== null) {
    this.arr.push(head.val);
    head = head.next;
    this.n++;
  }
};

/*
 *
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let k = Math.floor(this.n * Math.random());
  return this.arr[k === this.n ? this.n - 1 : k];
};

/*
 *
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

// Runtime: 163 ms, faster than 22.67% of JavaScript online submissions for Linked List Random Node.
// Memory Usage: 45.3 MB, less than 74.67% of JavaScript online submissions for Linked List Random Node.
