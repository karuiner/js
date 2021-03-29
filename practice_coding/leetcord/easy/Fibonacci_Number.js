/*
 *
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let x = 0,
        y = 1;
    if (n < 2) {
        return n;
    } else {
        for (let i = 2; i < n + 1; i++) {
            [y, x] = [y + x, y];
        }
        return y;
    }
};

//Runtime: 68 ms, faster than 98.11% of JavaScript online submissions for Fibonacci Number.
//Memory Usage: 38.7 MB, less than 7.28% of JavaScript online submissions for Fibonacci Number.

// var fib = function(n) {
//     let arr=[0,1]
//     if (n< 2){
//         return n
//     }else{
//         for (let i=2; i<n+1;i++){
//             arr[i]=arr[i-1]+arr[i-2]
//         }
//         return arr[n]
//     }

// };
//Runtime: 68 ms, faster than 98.11% of JavaScript online submissions for Fibonacci Number.
//Memory Usage: 38.6 MB, less than 24.87% of JavaScript online submissions for Fibonacci Number.
