// 조이스틱

// 풀이 완료
function solution(name) {
  var ans = 0,
    n = name.length,
    p = 0,
    arr = [],
    sub = [];
  let a = "A".charCodeAt(0);
  let z = "Z".charCodeAt(0);
  for (let j = 0; j < n; j++) {
    let i = name[j];
    let k = i.charCodeAt(0);
    let u = Math.min(k - a, z - k + 1);
    arr.push(u > 0 ? true : false);
    if (u > 0) {
      p++;
      sub.push(j);
    }
    ans += u;
  }
  let k = sub.length,
    c = 0,
    l = Math.min(sub[k - 1], n - 1 - sub[0] + 1);
  if (k < n) {
    for (let i = 0; i < n; i++) {
      if (arr[i]) {
        let q = 2 * sub[c] + 1 + n - 1 - sub[c + 1];
        let q2 = 2 * (n - sub[c + 1]) + sub[c];

        c++;
        l = Math.min(l, q, q2);
      }
      if (c >= k - 1) {
        break;
      }
    }
    ans += l;
  } else {
    ans += n - 1;
  }
  return ans;
}
