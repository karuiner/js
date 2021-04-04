/*
 *
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
  let [d, m, y] = date.split(" "),
    md = {
      Jan: "1",
      Feb: "2",
      Mar: "3",
      Apr: "4",
      May: "5",
      Jun: "6",
      Jul: "7",
      Aug: "8",
      Sep: "9",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };
  m = md[m].padStart(2, "0");
  d = d.substring(0, d.length - 2).padStart(2, "0");

  return `${y}-${m}-${d}`;
};

//Runtime: 72 ms, faster than 89.03% of JavaScript online submissions for Reformat Date.
//Memory Usage: 38.2 MB, less than 97.42% of JavaScript online submissions for Reformat Date.
