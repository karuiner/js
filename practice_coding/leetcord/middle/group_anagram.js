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
        return str.split("").reduce((x, y) => {
            return x + y.charCodeAt();
        }, 0);
    }
    //     function checkana(str, str2) {
    //         let a = str.split("");
    //         let b = str2.split("");
    //         a.sort();
    //         b.sort();
    //         return a.join("") === b.join("");
    //     }

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
/// 단순 연산에는 문제점이 하나있다. 같은 값을 판별해야한다.

console.log(groupAnagrams(strs));

let input = ["cab", "tin", "pew", "duh", "may", "ill", "buy", "bar", "max", "doc"];

let output = [["max"], ["buy"], ["doc"], ["may"], ["ill"], ["duh"], ["tin"], ["bar"], ["pew"], ["cab"]];
