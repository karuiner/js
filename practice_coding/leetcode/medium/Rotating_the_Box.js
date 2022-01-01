/*
 *
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  function f(n, c) {
    return [...Array(n - c).fill("."), ...Array(c).fill("#")];
  }

  function tp(box) {
    let n = box.length,
      m = box[0].length,
      ans = [];
    for (let i = 0; i < m; i++) {
      let sub = [];
      for (let j = 0; j < n; j++) {
        sub = [box[j][i], ...sub];
      }
      ans.push(sub);
    }
    return ans;
  }

  let nbox = [];
  for (let i of box) {
    let sub = [],
      l = 0,
      c = 0;
    for (let j of i) {
      if (j === "*") {
        sub = sub.concat([...f(l, c), "*"]);

        l = 0;
        c = 0;
      } else {
        l++;
        c += j === "#" ? 1 : 0;
      }
    }
    sub = sub.concat(f(l, c));
    nbox.push(sub);
  }
  return tp(nbox);
};
// Runtime: 2535 ms, faster than 5.51% of JavaScript online submissions for Rotating the Box.
// Memory Usage: 103.6 MB, less than 6.30% of JavaScript online submissions for Rotating the Box.
