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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  function f(root, s) {
    if (root === null) {
      return s;
    }
    s = String.fromCharCode(97 + root.val) + s;
    let ans = "";
    if (root.left !== null) {
      ans = f(root.left, s);
    }

    if (root.right !== null) {
      let sub = f(root.right, s);
      if (ans.length === 0) {
        ans = sub;
      } else if (sub < ans) {
        ans = sub;
      }
    }
    if (ans.length === 0) {
      ans = s;
    }
    return ans;
  }
  return f(root, "");
};

// Runtime: 129 ms, faster than 58.57% of JavaScript online submissions for Smallest String Starting From Leaf.
// Memory Usage: 47.3 MB, less than 57.14% of JavaScript online submissions for Smallest String Starting From Leaf.
