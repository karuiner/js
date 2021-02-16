var hammingWeight = function (n) {
    let ans = 0;
    for (let i of n.toString(2)) {
        ans += i === "1" ? 1 : 0;
    }
    return ans;
};
