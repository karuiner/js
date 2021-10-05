let letterCombinations = function (digits) {
    let db = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz" };
    let ans = [];
    if (digits.length > 0) {
        let arr = digits.split(""),
            arr2;
        ans = db[arr.splice(0, 1)].split("");
        while (arr.length > 0) {
            arr2 = db[arr.splice(0, 1)].split("");
            ans = ans.reduce((x, y) => x.concat(arr2.map((z) => y + z)), []);
        }
    }
    return ans;
};
digits = "23";
console.log(letterCombinations(digits));
console.log("expected : ", ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);
