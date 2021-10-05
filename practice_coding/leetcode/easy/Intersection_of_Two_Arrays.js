/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let db = {},
    ck = true;
  while (ck) {
    ck = false;
    let inum = [];
    for (let i of nums2) {
      let j = nums1.indexOf(i);
      if (j !== -1) {
        ck = true;
        nums1.splice(j, 1);
        if (db[i] === undefined) db[i] = 1;
      }
    }
  }
  return Object.keys(db);
};

//Runtime: 96 ms, faster than 7.08% of JavaScript online submissions for Intersection of Two Arrays.
//Memory Usage: 40.5 MB, less than 31.69% of JavaScript online submissions for Intersection of Two Arrays.
