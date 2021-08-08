function solution(dirs) {
  let x = 0,
    y = 0,
    l = 0,
    db = {},
    x1,
    y1,
    pass = false;
  for (let i of dirs) {
    switch (i) {
      case "U":
        if (y < 5) {
          [x1, y1] = [x, y + 1];
        } else {
          pass = true;
        }
        break;
      case "D":
        if (y > -5) {
          [x1, y1] = [x, y - 1];
        } else {
          pass = true;
        }
        break;
      case "R":
        if (x < 5) {
          [x1, y1] = [x + 1, y];
        } else {
          pass = true;
        }
        break;
      case "L":
        if (x > -5) {
          [x1, y1] = [x - 1, y];
        } else {
          pass = true;
        }
        break;
    }
    if (!pass) {
      let s = `${x}:${y}|${x1}:${y1}`,
        s1 = `${x1}:${y1}|${x}:${y}`;
      if (db[s] === undefined && db[s1] === undefined) {
        db[s] = 1;
        db[s1] = 1;
        l++;
      }
      [x, y] = [x1, y1];
    }
    pass = false;
    //console.log(i, l);
  }
  return l;
}

console.log(solution("LULLLLLLU")); // 7
