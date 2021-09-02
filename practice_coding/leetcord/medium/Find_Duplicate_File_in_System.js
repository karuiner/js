/*
 *
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let db = {};
  for (let i of paths) {
    let p = i.split(" ");
    let path = p[0],
      files = p.slice(1);
    for (let j of files) {
      let [file, content] = j.split("(");
      if (db[content.slice(0, -1)]) {
        db[content.slice(0, -1)] = [
          ...db[content.slice(0, -1)],
          path + "/" + file,
        ];
      } else {
        db[content.slice(0, -1)] = [path + "/" + file];
      }
    }
  }
  let ans = [];
  for (let i in db) {
    if (db[i].length > 1) {
      ans.push(db[i]);
    }
  }
  return ans;
};

// Runtime: 358 ms, faster than 5.74% of JavaScript online submissions for Find Duplicate File in System.
// Memory Usage: 77 MB, less than 5.74% of JavaScript online submissions for Find Duplicate File in System.
