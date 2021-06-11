function solution(lottos, win_nums) {
  let crt = 0,
    ran = 0;

  for (let i of lottos) {
    if (i === 0) {
      ran++;
    } else if (win_nums.includes(i)) {
      crt++;
    }
  }

  return [7 - (crt + ran) > 5 ? 6 : 7 - (crt + ran), 7 - crt > 5 ? 6 : 7 - crt];
}

let lottos = [44, 1, 0, 0, 31, 25],
  win_nums = [31, 10, 45, 1, 6, 19];
console.log(solution(lottos, win_nums)); //[3, 5]
