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
var getDecimalValue = function (head) {
    let arr = [];
    while (head !== null) {
        arr.push(head.val);
        head = head.next;
    }
    let ans = 0;
    if (arr.length > 0) {
        ans = Number(`0b${arr.join("")}`).toString(10);
    }
    return ans;
};
//Runtime: 72 ms, faster than 93.57% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
//Memory Usage: 38.7 MB, less than 35.00% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
