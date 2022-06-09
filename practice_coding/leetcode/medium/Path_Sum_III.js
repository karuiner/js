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
 * @param {number} targetSum
 * @return {number}
 */

// 시도 3
var pathSum = function (root, targetSum) {
  let ans = 0,
    arr = [],
    td = [],
    l = 0,
    lmx = 0;

  function find(root, idx, l) {
    if (root !== null) {
      lmx = l > lmx ? l : lmx;
      arr[idx] = root.val;
      if (root.left !== null) {
        find(root.left, 2 * idx + 1, l + 1);
      }
      if (root.right !== null) {
        find(root.right, 2 * idx + 2, l + 1);
      }
      let k = 0;
      for (let i = idx; i >= 0; i = Math.floor((i - 1) / 2)) {
        k += arr[i];
        if (k === targetSum) {
          ans++;
        }
      }
    }
  }
  find(root, 0, l);
  console.log(lmx);
  return ans;
};

// 시도 2
// var pathSum = function (root, targetSum) {
//   let ans = 0,
//     arr = [],
//     td = [];

//   function f(root, idx, l) {
//     if (root !== null) {
//       td[idx] = [];
//       l++;
//       let key = Math.floor((idx - 1) / 2);
//       for (let i = idx; i >= 0; i = Math.floor((i - 1) / 2)) {
//         if (i > key) {
//           td[i][idx] = root.val;
//         } else {
//           try {
//             td[i][idx] = td[i][key] + root.val;
//           } catch {
//             console.log(i, idx, l, root);
//           }
//         }
//         if (td[i][idx] === targetSum) {
//           ans++;
//         }
//       }

//       if (root.left !== null) {
//         f(root.left, 2 * idx + 1, l);
//       }
//       if (root.right !== null) {
//         f(root.right, 2 * idx + 2, l);
//       }
//     }
//   }
//   f(root, 0, 0);
//   // function find(root, idx) {
//   //   if (root !== null) {
//   //     arr[idx] = root.val;
//   //     if (root.left !== null) {
//   //       find(root.left, 2 * idx + 1);
//   //     }
//   //     if (root.right !== null) {
//   //       find(root.right, 2 * idx + 2);
//   //     }
//   //   }
//   // }
//   // find(root, 0);
//   // console.log(arr.length);

//   return ans;
// };

// 시도 1
// var pathSum = function (root, targetSum) {
//   let ans = 0,
//     arr = [];

//   function find(root, idx) {
//     if (root !== null) {
//       arr[idx] = root.val;
//       if (root.left !== null) {
//         find(root.left, 2 * idx + 1);
//       }
//       if (root.right !== null) {
//         find(root.right, 2 * idx + 2);
//       }
//     }
//   }

//   find(root, 0);
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== undefined) {
//       let k = i,
//         s = 0;
//       while (true) {
//         s += arr[k];
//         if (s === targetSum) {
//           ans++;
//         }
//         if (k === 0) {
//           break;
//         }
//         k = Math.floor((k - 1) / 2);
//       }
//     }
//   }

//   return ans;
// };
