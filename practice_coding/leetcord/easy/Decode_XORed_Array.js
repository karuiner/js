/*
 *
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
// var decode = function(encoded, first) {
//     return encoded.reduce(function (x,y){
//         return x.concat(x[x.length-1] ^y )
//     },[first])
// };
// Runtime: 4068 ms, faster than 5.45% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 48.1 MB, less than 5.04% of JavaScript online submissions for Decode XORed Array.

// var decode = function(encoded, first) {
//     let ans=[first];
//     for (let i=0 ; i <encoded.length;i++){
//         ans[i+1]=ans[i] ^ encoded[i]
//     }
//     return ans
// };
// Runtime: 132 ms, faster than 33.11% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 45.7 MB, less than 12.53% of JavaScript online submissions for Decode XORed Array.

var decode = function (encoded, first) {
    encoded = encoded.map(function (x) {
        [x, first] = [first, first ^ x];
        return x;
    });
    encoded.push(first);
    return encoded;
};
// Runtime: 116 ms, faster than 79.02% of JavaScript online submissions for Decode XORed Array.
// Memory Usage: 45.2 MB, less than 70.71% of JavaScript online submissions for Decode XORed Array.
