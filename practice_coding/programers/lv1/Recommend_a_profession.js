function solution(table, languages, preference) {
  let data = {},
    ans = "",
    c = 0;
  for (let i = 0; i < languages.length; i++) {
    data[languages[i]] = preference[i];
  }
  for (let i of table) {
    let p = i.split(" ");
    let nm = p[0],
      v = p.slice(1),
      score = 0;
    for (let j = 0; j < v.length; j++) {
      if (data[v[j]]) {
        score += (5 - j) * data[v[j]];
      }
    }
    if (score > c) {
      ans = nm;
      c = score;
    } else if (score === c && nm < ans) {
      ans = nm;
    }
  }

  return ans;
}
