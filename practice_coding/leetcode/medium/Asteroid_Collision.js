/*
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let i = 0;
  while (asteroids[i + 1] !== undefined) {
    if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
      let [a, b] = [Math.abs(asteroids[i]), Math.abs(asteroids[i + 1])];
      if (a > b) {
        asteroids = [...asteroids.slice(0, i + 1), ...asteroids.slice(i + 2)];
      } else if (a < b) {
        asteroids = [...asteroids.slice(0, i), ...asteroids.slice(i + 1)];
        i--;
      } else {
        asteroids = [...asteroids.slice(0, i), ...asteroids.slice(i + 2)];
        i--;
      }
    } else {
      i++;
    }
  }
  return asteroids;
};

// Runtime: 1344 ms, faster than 5.43% of JavaScript online submissions for Asteroid Collision.
// Memory Usage: 45.8 MB, less than 5.60% of JavaScript online submissions for Asteroid Collision.
