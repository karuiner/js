//다항식 더하기

function solution(polynomial) {
  let a = 0,
    b = 0;
  let arr = polynomial.split(" + ");
  for (let i of arr) {
    let n = i.length;
    if (i[n - 1] === "x") {
      if (n - 1 > 0) {
        a += Number(i.slice(0, n - 1));
      } else {
        a++;
      }
    } else {
      b += Number(i);
    }
  }
  let ans = [];
  if (a > 0) {
    let k = "x";
    if (a > 1) {
      k = a + k;
    }
    ans.push(k);
  }
  if (b > 0) {
    ans.push(b);
  }

  return ans.join(" + ");
}
