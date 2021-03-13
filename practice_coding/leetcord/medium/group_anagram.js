let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// var groupAnagrams = function (strs) {
//     let db = {};
//     function checkana(str, str2) {
//         let a = str.split("");
//         let b = str2.split("");
//         a.sort();
//         b.sort();
//         return a.join("") === b.join("");
//     }
//     for (let i of strs) {
//         if (Object.keys(db).length < 1) {
//             db[i] = [i];
//         } else {
//             let check = true;
//             for (j of Object.keys(db)) {
//                 if (checkana(i, j)) {
//                     check = false;
//                     db[j].push(i);
//                 }
//             }
//             if (check) {
//                 db[i] = [i];
//             }
//         }
//     }
//     let ans = Object.keys(db).reduce((x, y) => {
//         x.push(db[y]);
//         return x;
//     }, []);
//     return ans;
// };
//무식한 도전 이었다. 그냥 아스키 코드 더하기였을줄은..
var groupAnagrams = function (strs) {
    let db = {};
    function sum(str) {
        let nstr = str.split("");
        nstr.sort();
        console.log(nstr);
        return nstr.reduce((x, y) => {
            return x + y.charCodeAt();
        }, "");
    }

    for (let i of strs) {
        let num = sum(i);
        db[num] = db[num] === undefined ? [i] : db[num].concat(i);
    }
    let ans = Object.keys(db).reduce((x, y) => {
        x.push(db[y]);
        return x;
    }, []);
    return ans;
};

console.log(groupAnagrams(strs));

let input = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"];

let output = [["max"], ["buy"], ["doc"], ["may"], ["ill"], ["duh"], ["tin"], ["bar"], ["pew"], ["cab"]];
console.log(groupAnagrams(input));
