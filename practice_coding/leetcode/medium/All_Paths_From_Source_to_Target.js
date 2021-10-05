/*
 *
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph, s = 0, e = graph.length - 1) {
    let result = [];
    if (s !== e) {
        for (let i of graph[s]) {
            let deep = allPathsSourceTarget(graph, i, e);
            deep.forEach((x) => result.push([s, ...x]));
        }
    } else {
        result = [[s]];
    }
    return result;
};

//Runtime: 128 ms, faster than 38.75% of JavaScript online submissions for All Paths From Source to Target.
//Memory Usage: 48.6 MB, less than 8.82% of JavaScript online submissions for All Paths From Source to Target.

let graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));
