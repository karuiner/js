/*
 *
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/*
 *
 * @param {number[][]} grid
 * @return {Node}
 */
var construct = function (grid) {
  function iter(grid) {
    let n = grid.length,
      h = n / 2;
    let ts = 0;
    grid.forEach((x, i) => {
      x.forEach((y, j) => {
        ts += y;
      });
    });
    if (ts === n ** 2 || ts === 0) {
      return new Node(ts > 0 ? 1 : 0, 1);
    } else {
      let tl = [],
        tr = [],
        bl = [],
        br = [];
      grid.forEach((x, i) => {
        if (i < h) {
          tl.push(x.slice(0, h));
          tr.push(x.slice(h));
        } else {
          bl.push(x.slice(0, h));
          br.push(x.slice(h));
        }
      });
      return new Node(1, 0, iter(tl), iter(tr), iter(bl), iter(br));
    }
  }
  return iter(grid);
};

// Runtime: 84 ms, faster than 95.71% of JavaScript online submissions for Construct Quad Tree.
// Memory Usage: 46.4 MB, less than 10.00% of JavaScript online submissions for Construct Quad Tree.
