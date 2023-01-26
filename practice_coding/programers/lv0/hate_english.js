//영어가 싫어요
function solution(numbers) {
  let key = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ],
    db = {},
    db2 = {};
  key.forEach((x, i) => {
    let key = x.slice(0, 2);
    db[x] = i;
    db2[key] = x;
  });
  let ans = "";
  while (numbers.length > 0) {
    let key = numbers.slice(0, 2);
    let target = db2[key];
    let l = target.length;
    ans += db[target];
    numbers = numbers.slice(l);
  }

  return Number(ans);
}
