/*
 *
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  let s = 0,
    n = 0;
  boxTypes.sort((x, y) => y[1] - x[1]);
  for (let i of boxTypes) {
    if (n + i[0] < truckSize) {
      n += i[0];
      s += i[0] * i[1];
    } else {
      s += (truckSize - n) * i[1];
      break;
    }
  }
  return s;
};
//Runtime: 88 ms, faster than 88.68% of JavaScript online submissions for Maximum Units on a Truck.
//Memory Usage: 41.5 MB, less than 43.75% of JavaScript online submissions for Maximum Units on a Truck.
