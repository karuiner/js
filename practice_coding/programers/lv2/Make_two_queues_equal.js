//두 큐 합 같게 만들기

// 풀이 시도 1
function solution(queue1, queue2) {
  let ans = 0,
    sum = 0,
    s1 = 0,
    s2 = 0,
    max = 0,
    min = Infinity,
    n = queue1.length;
  for (let i = 0; i < n; i++) {
    let a = queue1[i],
      b = queue2[i];
    s1 += a;
    s2 += b;
    max = Math.max(a, b, max);
    min = Math.min(a, b, min);
    sum += a + b;
  }
  let hf = sum / 2;
  if (sum % 2 === 0 && hf >= max) {
  } else {
    ans = -1;
  }

  return ans;
}
