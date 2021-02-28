// farmer
let farmer = function () {
    this.race = "사람";
    this.weapon = ["부지깽이"];
    this.armor = ["천옷"];
};
farmer.prototype.attack = function () {
    return "찔러!!";
};
farmer.prototype.die = function () {
    return "죽기 싫어";
};
farmer.prototype.warcry = function () {
    return "우와아아아";
};

let farmer1 = new farmer();
console.log(farmer1);
console.log(farmer1.attack());
console.log(farmer1.die());

// soldier
let soldier = function () {
    farmer.call(this);
    this.weapon = ["창", "방패"];
    this.armor = ["가죽 갑주"];
};
soldier.prototype = Object.create(farmer.prototype);
soldier.prototype.constructor = soldier;
farmer.prototype.die = function () {
    return "네놈 만은...";
};

let soldier1 = new soldier();
console.log(soldier1);
console.log(soldier1.attack());
console.log(soldier1.die());
