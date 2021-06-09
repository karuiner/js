function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let c = i < 2 ? 1 : 2;
    for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        if (i / j === j) {
          c++;
        } else {
          c += 2;
        }
      }
    }
    if (c % 2) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

console.log(solution(13, 17)); //43

console.log(solution(24, 27)); //52
