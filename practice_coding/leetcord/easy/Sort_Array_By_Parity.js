/*
 *
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    let i = 0,
        j = A.length - 1;
    while (i < j) {
        if (A[i] % 2) {
            [A[j], A[i]] = [A[i], A[j]];
            j--;
        } else {
            i++;
        }
    }
    return A;
};
//Runtime: 88 ms, faster than 96.41% of JavaScript online submissions for Sort Array By Parity.
//Memory Usage: 40.6 MB, less than 83.81% of JavaScript online submissions for Sort Array By Parity.

// var sortArrayByParity = function(A) {
//     return A.reduce((acc,x)=>{
//         if (x%2){
//             acc.push(x)
//         }else{
//             acc=[].concat(x,acc)
//         }
//     return acc
//     },[])

// };

//Runtime: 400 ms, faster than 5.15% of JavaScript online submissions for Sort Array By Parity.
//Memory Usage: 45.3 MB, less than 5.89% of JavaScript online submissions for Sort Array By Parity.
