//진료 순서 정하기
function solution(emergency) {
  let arr = emergency.map((x, i) => {
    return [x, i];
  });
  arr.sort((a, b) => {
    return b[0] - a[0];
  });

  return arr.reduce((acc, x, i) => {
    acc[x[1]] = i + 1;
    return acc;
  }, []);
}
