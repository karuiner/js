// 숫자 짝꿍

//풀이 완료
function solution(X, Y) {
  let db = {},
    xn = X.length,
    yn = Y.length,
    ans = [],
    arr = Array(10).fill(0);
  for (let i = 0; i < xn; i++) {
    if (db[X[i]] === undefined) {
      db[X[i]] = 0;
    }
    db[X[i]]++;
  }
  for (let i = 0; i < yn; i++) {
    if (db[Y[i]] !== undefined && db[Y[i]] > 0) {
      arr[9 - Number(Y[i])]++;
      db[Y[i]]--;
    }
  }
  ans = "";
  for (let i = 0; i < 10; i++) {
    ans += "".padStart(arr[i], `${9 - i}`);
  }
  if (ans.length > 0) {
    // ans.sort((a,b)=> b>a?1:b<a?-1:0)
    // ans=ans.join('')
    return ans[0] === "0" ? "0" : ans;
  }

  return "-1";
}
