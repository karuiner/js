/*
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let key = [0],
    open = Array(rooms.length).fill(false);
  while (key.length > 0) {
    let oldkey = [...key];
    key = [];
    for (let i of oldkey) {
      key = key.concat(rooms[i]);
      rooms[i] = [];
      if (!open[i]) open[i] = true;
    }
  }
  for (let i of open) {
    if (!i) return i;
  }
  return true;
};
//Runtime: 92 ms, faster than 18.54% of JavaScript online submissions for Keys and Rooms.
//Memory Usage: 44.4 MB, less than 5.62% of JavaScript online submissions for Keys and Rooms.
