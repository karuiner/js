//특이한 정렬
function solution(numlist, n) {
  numlist.sort((a, b) => {
    let a1 = Math.abs(a - n);
    let b1 = Math.abs(b - n);
    let ans = a1 < b1 ? -1 : 1;
    if (a1 === b1) {
      ans = a < b ? 1 : -1;
    }
    return ans;
  });
  return numlist;
}
