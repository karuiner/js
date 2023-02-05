//이진수 더하기
function solution(bin1, bin2) {
  let ans = "",
    l = Math.max(bin1.length, bin2.length),
    c = false;
  bin1 = bin1.padStart(l, "0");
  bin2 = bin2.padStart(l, "0");
  for (let i = l - 1; i >= 0; i--) {
    let [a, b] = [bin1[i], bin2[i]],
      k = "0",
      nc = false;
    let xor = a ^ b;
    let and = a & b;
    if (!xor) {
      if (and) {
        nc = true;
      }
      k = c ? "1" : "0";
    } else {
      if (c) {
        nc = true;
      } else {
        k = "1";
      }
    }
    ans = k + ans;
    c = nc;
  }
  if (c) {
    ans = "1" + ans;
  }

  return ans;
}
