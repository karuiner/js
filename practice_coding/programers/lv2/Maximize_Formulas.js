// 수식 최대화
function solution(expression) {
  let arr = [],
    s = "",
    n = expression.length,
    na = 0,
    db = {};
  for (let i = 0; i < n; i++) {
    let k = expression[i];
    if (k === "*" || k === "-" || k === "+") {
      if (db[k] === undefined) {
        db[k] = true;
      }
      arr[na] = s;
      s = "";
      na++;
      arr[na] = k;
      na++;
    } else if (i === n - 1) {
      s += k;
      arr[na] = s;
      s = "";
      na++;
    } else {
      s += k;
    }
  }
  //    let op=['*','+','-']
  let op = Object.keys(db);
  function combi(op, mk) {
    let n = op.length;
    if (n === 0) {
      return [mk];
    }
    let ans = [];
    for (let i = 0; i < n; i++) {
      let sub = combi([...op.slice(0, i), ...op.slice(i + 1)], [...mk, op[i]]);
      ans = ans.concat(sub);
    }
    return ans;
  }
  let ops = combi(op, []);
  // 생성이 속도를 저하할시 고정된 명령어 목록을 사용
  //     let ops=	[
  //   [ '*', '+', '-' ],
  //   [ '*', '-', '+' ],
  //   [ '+', '*', '-' ],
  //   [ '+', '-', '*' ],
  //   [ '-', '*', '+' ],
  //   [ '-', '+', '*' ]
  // ]
  let ans = 0;
  for (let i of ops) {
    let sub = [...arr];
    for (let j of i) {
      let k = 0;
      while (k < sub.length) {
        if (sub[k] === j) {
          let [a, b] = [Number(sub[k - 1]), Number(sub[k + 1])];
          if (j === "*") {
            a *= b;
          } else if (j === "+") {
            a += b;
          } else {
            a -= b;
          }
          sub = [...sub.slice(0, k - 1), a, ...sub.slice(k + 2)];
          k = 0;
        } else {
          k++;
        }
      }
    }
    let v = sub[0] < 0 ? -sub[0] : sub[0];
    ans = ans < v ? v : ans;
  }

  return ans;
}
let values = [
  ["100-200*300-500+20", 60420],
  ["50*6-3*2", 300],
];
for (let [expression, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      expression
    )}, expected_result : ${expected_result} `
  );
}
