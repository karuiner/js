/*
 *
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let ans = 0,
    x = -1,
    f = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (f >= plants[i]) {
      f -= plants[i];
      ans += i - x;
      x = i;
    } else {
      f = capacity - plants[i];
      ans += x + 1 + (i + 1);
      x = i;
    }
  }
  return ans;
};

// Runtime: 121 ms, faster than 13.40% of JavaScript online submissions for Watering Plants.
// Memory Usage: 38.8 MB, less than 59.79% of JavaScript online submissions for Watering Plants.
