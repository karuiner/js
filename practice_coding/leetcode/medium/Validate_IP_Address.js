/*
 *
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
  let ipv4 = IP.split("."),
    ipv6 = IP.split(":"),
    ans = "Neither";
  if (ipv4.length === 4) {
    ans = "IPv4";
    for (let i of ipv4) {
      if (
        isNaN(i) ||
        i !== `${Number(i)}` ||
        Number(i) < 0 ||
        Number(i) > 255
      ) {
        ans = "Neither";
        break;
      }
    }
  }

  if (ipv6.length === 8) {
    ans = "IPv6";
    for (let i of ipv6) {
      if (i.length >= 1 && i.length <= 4) {
        for (let j of i) {
          if (isNaN(j) && (j.toLowerCase() < "a" || j.toLowerCase() > "f")) {
            ans = "Neither";
            break;
          }
        }
        if (ans !== "IPv6") {
          break;
        }
      } else {
        ans = "Neither";
        break;
      }
    }
  }

  return ans;
};

// Runtime: 68 ms, faster than 93.01% of JavaScript online submissions for Validate IP Address.
// Memory Usage: 38.9 MB, less than 19.58% of JavaScript online submissions for Validate IP Address.
