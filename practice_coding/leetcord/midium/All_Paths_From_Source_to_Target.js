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

let graph = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(graph));
graph = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log(allPathsSourceTarget(graph));
