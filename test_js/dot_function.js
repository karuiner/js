function a(x) {
    x.add = function (a, b) {
        return a + b;
    };
    return x;
}
let u = function () {};
u = a(u);
console.log(u.add(1, 2));
