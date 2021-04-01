/*
 *
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== arr[i]) {
      let k = arr.slice(i).indexOf(target[i]);
      if (k === -1) {
        return false;
      } else {
        [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
      }
    }
  }
  return true;
};
//Runtime: 76 ms, faster than 99.09% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
//Memory Usage: 45.2 MB, less than 5.17% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
