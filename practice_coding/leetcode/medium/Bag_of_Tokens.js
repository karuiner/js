/*
 *
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  let n = tokens.length,
    score = 0,
    mx = 0,
    i = 0,
    j = n - 1;
  tokens.sort((a, b) => a - b);

  if (n === 0 || power < tokens[0]) {
    return score;
  } else {
    power -= tokens[0];
    i++;
    score++;
    mx++;
    while ((score > 0 || power >= tokens[i]) && i <= j) {
      if (power < tokens[i]) {
        score--;
        power += tokens[j];
        j--;
      } else {
        power -= tokens[i];
        score++;
        i++;
        if (score > mx) {
          mx = score;
        }
      }
    }
  }
  return mx;
};

// Runtime: 81 ms, faster than 65.00% of JavaScript online submissions for Bag of Tokens.
// Memory Usage: 43.2 MB, less than 100.00% of JavaScript online submissions for Bag of Tokens.
