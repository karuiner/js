//종이 자르기
function solution(M, N) {
  // 2, 1 => 1
  // 1, 2 => 1
  // 2, 2 => 2 * 1, 2 => 2
  // 4, 4 => 4 *  1, 4 =>  12
  [M, N] = M < N ? [M, N] : [N, M];
  let a = M - 1,
    b = N - 1;

  return a + M * b;
}
