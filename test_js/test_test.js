// function findShortestWord(arr) {
//     let stringFilter = arr.filter(function (string) {
//         if (typeof string === "string") {
//             return string;
//         }
//     });
//     console.log(stringFilter);
//     let most = stringFilter.reduce(function (acc, cur) {
//         if (cur.length >= acc.length) {
//             return acc;
//         }
//     });
//     return most;
// }
// findShortestWord(["these", "are", "strings"]);

// module.exports.value = 100;

// const counter = {
//     value: 0,
//     increse: () => {
//         this.value++;
//     },
//     decrease: () => {
//         this.value--;
//     },
//     getValue: () => {
//         return this.value;
//     },
// };
// console.log(this);
// console.log(counter.getValue());
// counter.increse();
// counter.decrease();
// counter.decrease();
// console.log(counter.getValue());

function foo() {
    return this;
}
console.log(globalThis);
console.log(global);
console.log(foo.call() === global);
