let db = { a: ["b", "c"], b: ["a", "d", "g"], c: ["a", "d", "e"], d: ["b", "c", "f"], e: ["c", "f"], f: ["d", "e", "g"], g: ["b", "f"] };
//깊이 우선 탐색  공부하고 만들어 볼 것
function dfs(dmap, sp) {
    let vp = {};
    sp = sp || Object.Keys(dmap)[0];
}
