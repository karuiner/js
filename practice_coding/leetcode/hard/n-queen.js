/*
 *
 * @param {number} n
 * @return {string[][]}
 */
// var solveNQueens = function (n) {
//     function mk_board(n) {
//         let board = [];
//         for (let i = 0; i < n; i++) {
//             board.push(Array(n).fill(0));
//         }
//         return board;
//     }
//     function check(board, qset, n) {
//         for (let i of qset) {
//             let [a, b] = i;
//             if (board[a][b] === 1) {
//                 return false;
//             }
//             for (let k = 0; k < n; k++) {
//                 board[a][k] = 1; // 가로 1로 채우기
//                 board[k][b] = 1; // 세로 1로 채우기
//                 if (b - a + k >= 0 && b - a + k < n) {
//                     board[k][b - a + k] = 1; //좌상 대각선
//                 }
//                 if (b + a - k >= 0 && b + a - k < n) {
//                     board[k][b + a - k] = 1; // 우상 대각선
//                 }
//             }
//         }
//         return true;
//     }

//     function suffle(n) {
//         let arr = Array(n).fill(0),
//             result = [];
//         arr = arr.map((x, i) => i);
//         let k = 0;
//         while (k < n) {
//             if (result.length === 0) {
//                 arr.forEach((x) => result.push([x]));
//             } else {
//                 result = result.reduce((acc, x) => {
//                     let sub = arr.filter((xx) => !x.includes(xx));
//                     let p = sub.map((xx) => x.concat(xx));
//                     return [].concat(acc, p);
//                 }, []);
//             }
//             k++;
//         }
//         return result;
//     }
//     let qsetdb = suffle(n),
//         ans = [];
//     for (let i of qsetdb) {
//         let qset = i.map((x, j) => [j, x]);
//         //        console.log(qset);
//         let board = mk_board(n);
//         if (check(board, qset, n)) {
//             console.log(i);
//             ans.push(i);
//         }
//     }

//     ans = ans.map((x) => {
//         return x.map((xx) => {
//             let p = Array(n).fill(".");
//             p[xx] = "Q";
//             return p.join("");
//         });
//     });

//     return ans;
// };

function check(board, qset, n) {
    for (let i of qset) {
        let [a, b] = i;
        console.log(a, b);
        if (board[a][b] === 1) {
            return { ox: false, board: board };
        }
        for (let k = 0; k < n; k++) {
            board[a][k] = 1; // 가로 1로 채우기
            board[k][b] = 1; // 세로 1로 채우기
            if (b - a + k >= 0 && b - a + k < n) {
                board[k][b - a + k] = 1; //좌상 대각선
            }
            if (b + a - k >= 0 && b + a - k < n) {
                board[k][b + a - k] = 1; // 우상 대각선
            }
            console.log("             ");
            for (let u of board) {
                console.log(u);
            }
        }
    }
    return { ox: true, board: board };
}

// function check(board, qset, n) {
//     for (let i of qset) {
//         let [a, b] = i;
//         if (board[a][b] === 1) {
//             return false;
//         }
//         for (let k = 0; k < n; k++) {
//             board[a][k] = 1; // 가로 1로 채우기
//             board[k][b] = 1; // 세로 1로 채우기
//             if (b - a + k >= 0 && b - a + k < n) {
//                 board[k][b - a + k] = 1; //좌상 대각선
//             }
//             if (b - a - k >= 0 && b - a - k < n) {
//                 board[k][b - a - k] = 1; // 우상 대각선
//             }
//         }
//     }
//     return true;
// }

function ox(board, qset, n) {
    for (let i of qset) {
        let [a, b] = i;
        for (let k = 0; k < n; k++) {
            board[a][k] = 1; // 가로 1로 채우기
            board[k][b] = 1; // 세로 1로 채우기
            if (b - a + k >= 0 && b - a + k < n) {
                board[k][b - a + k] = 1; //좌상 대각선
            }
            if (b - a - k >= 0 && b - a - k < n) {
                board[k][b - a - k] = 1; // 우상 대각선
            }
        }
    }
    return board;
}

function mk_board(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
        board.push(Array(n).fill(0));
    }
    return board;
}
console.log(solveNQueens(9));

// let board = mk_board(4);
// let qset = [
//     [0, 1],
//     [1, 3],
//     [2, 2],
//     [3, 0],
// ];
// let ck = check(board, qset, 4);
// console.log(ck.ox);
// console.log(ck.board);

// 시간 오바

function suffle2(n) {
    let arr = Array(n).fill(0),
        result = [];
    arr = arr.map((x, i) => i);
    let k = 0;
    while (k < n) {
        if (result.length === 0) {
            arr.forEach((x) => result.push([x]));
        } else {
            result = result.reduce((acc, x) => {
                let sub = arr.filter((xx) => !x.includes(xx) && Math.abs(x[k - 1] - xx) > 1);
                let p = sub.map((xx) => x.concat(xx));

                return [].concat(acc, p);
            }, []);
        }
        k++;
    }
    return result;
}

var solveNQueens = function (n) {
    function suffle(n) {
        let arr = Array(n).fill(0),
            result = [];
        arr = arr.map((x, i) => i);
        let k = 0;
        while (k < n) {
            if (result.length === 0) {
                arr.forEach((x) => result.push([x]));
            } else {
                result = result.reduce((acc, x) => {
                    let sub = arr.filter((xx) => !x.includes(xx) && Math.abs(x[k - 1] - xx) > 1);
                    let p = sub.map((xx) => x.concat(xx));

                    return [].concat(acc, p);
                }, []);
            }
            k++;
        }
        return result;
    }

    let ans = suffle(n);

    ans = ans.map((x) => {
        return x.map((xx) => {
            let p = Array(n).fill(".");
            p[xx] = "Q";
            return p.join("");
        });
    });

    return ans;
};
