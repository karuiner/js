let test = function () {
    this.a = 1;
    this.b = 2;
    this.c = 3;
    this.d = 4;
};

let test2 = function () {
    test.apply(this);
};

let test3 = function () {
    test.call(this);
};

let test4 = function () {
    test.bind(this);
};

let t1 = new test2();
console.log(t1);

let t2 = new test3();
console.log(t2);

let t3 = new test4();
console.log(t3);
