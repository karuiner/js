function solution(cards) {
  let ans = 0,
    n = cards.length,
    check = Array(n).fill(true),
    count = [];

  for (let i = 0; i < n; i++) {
    let k = i,
      c = 0;
    while (check[k]) {
      c++;
      check[k] = false;
      k = cards[k] - 1;
    }
    if (c > 0) {
      count.push(c);
    }
  }
  count.sort((a, b) => b - a);

  return count.length > 1 ? count[0] * count[1] : 0;
}
