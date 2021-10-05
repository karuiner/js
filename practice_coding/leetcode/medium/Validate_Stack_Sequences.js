/*
 *
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [],
    k = 0;
  while (popped.length > 0) {
    if (stack[0] === popped[0]) {
      stack = [...stack.slice(1)];
      popped = [...popped.slice(1)];
    } else if (stack.includes(popped[0])) {
      return false;
    } else if (pushed.length > 0) {
      stack = [pushed[0], ...stack];
      pushed = [...pushed.slice(1)];
    }
  }
  return true;
};

// Runtime: 104 ms, faster than 18.69% of JavaScript online submissions for Validate Stack Sequences.
// Memory Usage: 45.1 MB, less than 5.61% of JavaScript online submissions for Validate Stack Sequences.
