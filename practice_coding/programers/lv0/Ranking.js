//등수 매기기
function solution(score) {
  let ans = [],
    i = 0,
    sub = [];
  for (let [a, b] of score) {
    sub.push([(a + b) / 2, i]);
    i++;
  }
  sub.sort((a, b) => {
    return b[0] - a[0];
  });
  let ix = 1,
    v = 101,
    c = 1;
  for (let [a, b] of sub) {
    if (a < v) {
      v = a;
      ix = c;
    }
    ans[b] = ix;
    c++;
  }

  return ans;
}
