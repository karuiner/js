let once = function (func) {
    let ans,
        life = 1;
    console.log(ans, life);
    return function (...x) {
        if (life > 0) {
            life--;
            ans = func(...x);
            return ans;
        } else {
            return ans;
        }
    };
};

const add = once(function (x, y, z) {
    return x + y + z;
});
console.log(add(1, 2, 3));
console.log(add(4, 5, 6));
console.log(add(7, 8, 9));
