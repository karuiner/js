/*
 *
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function (memory1, memory2) {
  let k = 1,
    c = 0;
  while (memory1 >= k || memory2 >= k) {
    if ((memory1 < memory2 || memory1 < k) && memory2 >= k) {
      memory2 -= k;
    } else if (memory1 >= k) {
      memory1 -= k;
    }
    k++;
    c++;
  }
  return [c + 1, memory1, memory2];
};

// Runtime: 95 ms, faster than 16.00% of JavaScript online submissions for Incremental Memory Leak.
// Memory Usage: 42 MB, less than 64.00% of JavaScript online submissions for Incremental Memory Leak.
