/*
 *
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let arr = [],
    p = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "*" || s[i] === "/" || s[i] === "+" || s[i] === "-") {
      arr = arr.concat([Number(p), s[i]]);
      p = "";
    } else if (s[i] !== " " && isNaN(s[i]) === false) {
      p += s[i];
    }
    if (i === s.length - 1) {
      arr.push(Number(p));
    }
  }
  function cal(a, b, op) {
    if (op === "*") {
      return a * b;
    } else if (op === "/") {
      return Math.floor(a / b);
    } else if (op === "+") {
      return a + b;
    } else {
      return a - b;
    }
  }
  let l = 1;
  while (l < arr.length) {
    if (arr[l] === "*" || arr[l] === "/") {
      let v = cal(arr[l - 1], arr[l + 1], arr[l]);
      arr = [...arr.slice(0, l - 1), v, ...arr.slice(l + 2)];
    } else {
      l += 2;
    }
  }

  l = 1;
  while (l < arr.length) {
    if (arr[l] === "+" || arr[l] === "-") {
      let v = cal(arr[l - 1], arr[l + 1], arr[l]);
      arr = [...arr.slice(0, l - 1), v, ...arr.slice(l + 2)];
    } else {
      l += 2;
    }
  }

  return arr[0];
};
