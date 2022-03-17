function solution(genres, plays) {
  let ans = [],
    db = {},
    n = genres.length,
    key = [];
  for (let i = 0; i < n; i++) {
    if (db[genres[i]] === undefined) {
      db[genres[i]] = { list: [], plays: 0 };
      key.push(genres[i]);
    }
    db[genres[i]]["list"].push([i, plays[i]]);
    db[genres[i]]["plays"] += plays[i];
  }
  key.sort((a, b) => db[b].plays - db[a].plays);
  for (let i of key) {
    db[i].list.sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });
    for (let j of db[i].list.slice(0, 2)) {
      ans.push(j[0]);
    }
  }

  return ans;
}
let genres = ["classic", "pop", "classic", "classic", "pop"],
  plays = [500, 600, 150, 800, 2500],
  expected_result = [4, 1, 3, 0];
console.log(
  `calculated_result : ${solution(
    genres,
    plays
  )}, expected_result : ${expected_result} `
);
