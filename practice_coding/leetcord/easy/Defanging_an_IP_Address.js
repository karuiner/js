/*
 *
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function (address) {
    let ans = "";
    for (let i of address) {
        ans += i === "." ? "[.]" : i;
    }
    return ans;
};

//Runtime: 68 ms, faster than 97.81% of JavaScript online submissions for Defanging an IP Address.
//Memory Usage: 38.7 MB, less than 7.17% of JavaScript online submissions for Defanging an IP Address.

// var defangIPaddr = function(address) {
//     return address.replace(/[.]/g,'[.]')
// };

//Runtime: 76 ms, faster than 78.53% of JavaScript online submissions for Defanging an IP Address.
//Memory Usage: 38.5 MB, less than 51.92% of JavaScript online submissions for Defanging an IP Address.
