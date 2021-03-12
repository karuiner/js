const fs = require("fs");
let p = fs.readFileSync("./test_js/db/data.txt", "utf8");
console.log(typeof p, p[0]);
let u = p.split("\n");
u = u.map((x) => Number(x));
console.log(u);
function fibo(a, b) {
    return a + b;
}
