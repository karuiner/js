var UndergroundSystem = function () {
  this.db = {};
};

/*
 *
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.db[id] = { time: -t, route: [stationName] };
};

/*
 *
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  this.db[id]["time"] += t;
  this.db[id]["route"].push(stationName);
  if (
    this.db[this.db[id]["route"][0]] &&
    this.db[this.db[id]["route"][0]][this.db[id]["route"][1]]
  ) {
    this.db[this.db[id]["route"][0]][this.db[id]["route"][1]][0] +=
      this.db[id]["time"];
    this.db[this.db[id]["route"][0]][this.db[id]["route"][1]][1]++;
  } else {
    let [a, b] = this.db[id]["route"];
    this.db[a] = this.db[a] ? { ...this.db[a] } : {};
    this.db[a][b] = [this.db[id]["time"], 1];
  }
};

/*
 *
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (
  startStation,
  endStation
) {
  let [time, c] = this.db[startStation][endStation];
  return time / c;
};

/*
 *
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */

// Runtime: 324 ms, faster than 13.36% of JavaScript online submissions for Design Underground System.
// Memory Usage: 60.2 MB, less than 5.34% of JavaScript online submissions for Design Underground System.
