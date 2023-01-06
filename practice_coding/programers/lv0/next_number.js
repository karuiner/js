//다음에 올 숫자
function solution(common) {
  let ans = 0,
    l = common.length,
    p = 0,
    s = 1;
  for (let i = 0; i < l - 1; i++) {
    let a = common[i],
      b = common[i + 1];
    if (i === 0) {
      p = b - a;
      s = b / a;
    } else {
      if (b - a !== p) {
        p = -1;
      }
      if (b / a !== s) {
        s = -1;
      }
    }
  }
  if (s > 0) {
    ans = common[l - 1] * s;
  } else {
    ans = common[l - 1] + p;
  }

  return ans;
}
