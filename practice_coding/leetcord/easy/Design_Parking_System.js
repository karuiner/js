/*
 *
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.storage = [Array(big).fill(0), Array(medium).fill(0), Array(small).fill(0)];
    this.l = [big, medium, small];
    this.n = [0, 0, 0];
};

/*
 *
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    let k = carType - 1;
    if (this.n[k] < this.l[k]) {
        this.storage[k][this.n[k]] = 1;
        this.n[k] += 1;
        return true;
    }
    return false;
};

/*
 *
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
//Runtime: 160 ms, faster than 37.60% of JavaScript online submissions for Design Parking System.
//Memory Usage: 46.7 MB, less than 21.74% of JavaScript online submissions for Design Parking System.
