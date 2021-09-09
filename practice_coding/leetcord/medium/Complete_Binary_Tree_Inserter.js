/*
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 *
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
  this.root = root;
  let list = [root];
  this.insert_list = [];
  while (list.length > 0) {
    let dum = [];
    for (let i of list) {
      if (i.left === null && i.right === null) {
        this.insert_list.push(i);
      } else if (i.left === null || i.right === null) {
        this.insert_list.push(i);
        if (i.left !== null) {
          dum.push(i.left);
        }
        if (i.right !== null) {
          dum.push(i.right);
        }
      } else {
        dum.push(i.left, i.right);
      }
    }
    list = [...dum];
  }
};

/*
 *
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  let node = this.insert_list[0];
  if (node.left === null) {
    node.left = new TreeNode(val);
    this.insert_list.push(node.left);
  } else {
    node.right = new TreeNode(val);
    this.insert_list.push(node.right);
    this.insert_list = this.insert_list.slice(1);
  }
  return node.val;
};

/*
 *
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root;
};

/*
 *
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

// Runtime: 120 ms, faster than 58.06% of JavaScript online submissions for Complete Binary Tree Inserter.
// Memory Usage: 47.2 MB, less than 19.35% of JavaScript online submissions for Complete Binary Tree Inserter.
