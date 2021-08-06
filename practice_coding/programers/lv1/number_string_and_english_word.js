function solution(s) {
  let db = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let ans = [],
    c = "";
  if (!isNaN(s)) {
    return Number(s);
  }

  for (let i of s) {
    if (isNaN(i)) {
      c = c + i;
      if (db[c] !== undefined) {
        ans.push(db[c]);
        c = "";
      }
    } else {
      ans.push(i);
    }
  }

  var answer = Number(ans.join(""));
  return answer;
}
let s = "onezerozerozerozerozerozerozerozerozerozerozerozerozero";
console.log(solution(s));
