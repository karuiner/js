let f = function () {
    this.a = 1;
    this.b = 2;
};

f.prototype.c = function (b) {
    g.call(this, b);
    this.b--;
    console.log(this.b);
};

let g = function (a, b) {
    f.call(this, a, b);
    this.d = 3;
    this.e = 4;
};
g.prototype = Object.create(f.prototype);
g.prototype.h = function () {
    this.e = this.e - 1;
    return this;
};
g.prototype.constructor = g;

let u = new g();
