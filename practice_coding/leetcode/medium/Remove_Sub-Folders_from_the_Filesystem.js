/*
 *
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  let db = {},
    ans = [];
  folder.sort();
  for (let i of folder) {
    let f = i.slice(1).split("/"),
      d = "",
      check = true;
    for (let j of f) {
      d = d + "/" + j;
      if (db[d]) {
        check = false;
        break;
      }
    }
    if (check) {
      db[i] = true;
      ans.push(i);
    }
  }
  return ans;
};

// Runtime: 228 ms, faster than 49.02% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
// Memory Usage: 57.9 MB, less than 47.06% of JavaScript online submissions for Remove Sub-Folders from the Filesystem.
