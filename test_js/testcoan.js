let age = 27;
let nm = "jin";
let height = 179;
console.log("global-s", age, nm, height);
function outerFn() {
    let age = 24;
    nm = "jimin";
    let height = 178;
    console.log("out", age, nm, height);
    function innerFn() {
        age = 26;
        let nm = "suga";
        console.log("in-end", age, nm, height);
        return height;
    }
    console.log("out-mid", age, nm, height);

    innerFn();

    console.log("out-end", age, nm, height);
    return innerFn;
}
console.log("global-mid", age, nm, height);

const innerFn = outerFn();
console.log("global-end", age, nm, height);
console.log(age, nm, innerFn());
