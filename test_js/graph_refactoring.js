var allPathsSourceTarget = function (graph) {
    db = [];
    graph.forEach(function (x, i) {
        //        console.log(x, i, db.length);
        if (x.length > 0) {
            if (db.length === 0) {
                for (let j of x) {
                    db.push([i, j]);
                }
            } else {
                db.forEach(function (k, j) {
                    if (k[k.length - 1] === i) {
                        let original = db[j];
                        for (let l of x) {
                            db.push([...original, l]);
                        }
                    }
                });
                db = db.filter((x) => x[x.length - 1] !== i);
            }
        }
    });
    return db;
};
// 위코드는 주어진 문제를 완벽히 풀지 못한다. 재귀적인 관점에서 재구성 하여 아래코드를 완성하였다.
let graph = [[1, 2], [3], [3], []];
// console.log(allPathsSourceTarget(graph));
graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));

// 주어진 것을 재귀방식으로 만들어 볼것.
// 주어진 그래프를 전부 순회하고 처음에서 끝까지 갈수 있는 모든 방법을 표현하는 것이다.
var allPathsSourceTarget2 = function (graph, s = 0, e = graph.length - 1) {
    let result = [];
    if (s !== e) {
        for (let i of graph[s]) {
            let deep = allPathsSourceTarget2(graph, i, e);
            deep.forEach((x) => result.push([s, ...x]));
        }
    } else {
        result = [[s]];
    }
    return result;
};
console.log(allPathsSourceTarget2(graph));

// 위는 완성하였으니 이제 재귀하지 않는 버전을 다시 완성해봐야한다.
