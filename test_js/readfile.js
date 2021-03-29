const fs = require("fs");
// let p = fs.readFileSync("./test_js/db/data.txt", "utf8");
// console.log(typeof p, p[0]);
// let u = p.split("\n");
// u = u.map((x) => Number(x));
// console.log(u);
// function fibo(a, b) {
//     return a + b;
// }

const readfile = (path) => {
    return new Promise((resolve) => {
        fs.readFile(path, "utf8", (err, data) => {
            //                console.log("in", err, data);
            resolve(data);
        });
    });
};
function check() {
    let k = readfile("./test_js/db/data.txt");
    k.then((data) => console.log("then", data));
}
check();
let path1 = "./test_js/db/data.txt",
    path2 = "./test_js/db/test.txt";
function check1() {
    readfile(path1)
        .then((data) => {
            console.log(data);
            return readfile(path2);
        })
        .then((data) => {
            console.log(data);
        });
}
check1();

function check2() {
    let p1 = readfile(path1);
    let p2 = readfile(path2);
    Promise.all([p1, p2]).then((data) => {
        console.log(data);
    });
}

check2();

async function check3() {
    let p = await readfile(path1);
    let p1 = await readfile(path2);
    console.log(p, p1);
}

check3();
