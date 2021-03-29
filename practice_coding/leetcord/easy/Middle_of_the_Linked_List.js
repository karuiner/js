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
var middleNode = function (head) {
    let db = {},
        k = 0;
    while (head !== null) {
        db[k] = head;
        k++;
        head = head.next;
    }
    return db[parseInt(k / 2)];
};

//Runtime: 72 ms, faster than 88.28% of JavaScript online submissions for Middle of the Linked List.
//Memory Usage: 38.8 MB, less than 5.29% of JavaScript online submissions for Middle of the Linked List.
