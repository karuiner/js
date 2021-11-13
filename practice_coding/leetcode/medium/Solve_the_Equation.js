/*
 *
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function (equation) {
  let [left, right] = equation.split("=");
  function get(s) {
    let arr = [],
      d = "";
    for (let i of s) {
      if (i === "+") {
        arr.push(d);
        d = "";
      } else if (i === "-") {
        arr.push(d);
        d = "-";
      } else {
        d += i;
      }
    }
    if (d.length > 0) {
      arr.push(d);
    }
    return arr;
  }
  let x = 0,
    c = 0;
  for (let i of get(left)) {
    if (isNaN(i)) {
      if (i.length === 1) {
        x += 1;
      } else {
        let k = i.slice(0, -1);
        if (k === "-") {
          x -= 1;
        } else {
          x += Number(k);
        }
      }
    } else {
      c += Number(i);
    }
  }
  for (let i of get(right)) {
    if (isNaN(i)) {
      if (i.length === 1) {
        x -= 1;
      } else {
        let k = i.slice(0, -1);
        if (k === "-") {
          x += 1;
        } else {
          x -= Number(k);
        }
      }
    } else {
      c -= Number(i);
    }
  }

  if (x === 0 && c === 0) {
    return "Infinite solutions";
  } else if (x === 0 && c !== 0) {
    return "No solution";
  } else {
    return `x=${-c / x}`;
  }
};

// Runtime: 84 ms, faster than 42.31% of JavaScript online submissions for Solve the Equation.
// Memory Usage: 39.1 MB, less than 7.69% of JavaScript online submissions for Solve the Equation.
