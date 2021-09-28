/*
 *
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
  this.list = [];
};

/*
 *
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  return this.list[index] !== undefined ? this.list[index] : -1;
};

/*
 *
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  this.list = [val, ...this.list];
};

/*
 *
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  this.list = [...this.list, val];
};

/*
 *
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= this.list.length) {
    this.list = [...this.list.slice(0, index), val, ...this.list.slice(index)];
  }
};

/*
 *
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
};

/*
 *
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// Runtime: 172 ms, faster than 37.32% of JavaScript online submissions for Design Linked List.
// Memory Usage: 49 MB, less than 8.09% of JavaScript online submissions for Design Linked List.
