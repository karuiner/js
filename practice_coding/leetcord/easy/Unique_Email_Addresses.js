/*
 *
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  let db = {};
  for (let i of emails) {
    let [l, d] = i.split("@");
    l = l.split("+")[0];
    l = l.replace(/[.]/g, "");
    e = `${l}@${d}`;
    if (db[e] === undefined) db[e] = 1;
  }

  return Object.keys(db).length;
};
//Runtime: 136 ms, faster than 11.89% of JavaScript online submissions for Unique Email Addresses.
//Memory Usage: 43.9 MB, less than 50.21% of JavaScript online submissions for Unique Email Addresses.
