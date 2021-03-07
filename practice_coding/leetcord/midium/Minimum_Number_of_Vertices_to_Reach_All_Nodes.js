/*
 *
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    let sample = {};
    edges.forEach((x) => {
        sample[x[0]] = sample[x[0]] === undefined ? 0 : sample[x[0]] > 0 ? 1 : 0;
        sample[x[1]] = sample[x[1]] === undefined ? 1 : 1;
    });

    //console.log(sample)
    return Object.keys(sample).filter((x) => sample[x] === 0);
};
//Runtime: 216 ms, faster than 40.85% of JavaScript online submissions for Minimum Number of Vertices to Reach All Nodes.
//Memory Usage: 64.1 MB, less than 50.61% of JavaScript online submissions for Minimum Number of Vertices to Reach All Nodes.
