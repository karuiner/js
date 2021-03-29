s = [4, 5, 6, 3, 2, 1, 8, 7];

function msort(arr) {
    let ans = [];
    if (arr.length < 2) {
        return arr;
    } else {
        let l = arr.length % 2 ? (arr.length + 1) / 2 : arr.length / 2,
            h = arr.length - l,
            out = 2 * arr.length,
            k = 0;
        let a = arr.slice(0, l),
            b = arr.slice(l),
            i = 0,
            j = 0;
        a = msort(a);
        b = msort(b);
        while (ans.length < arr.length && k < out) {
            if (i === l) {
                ans = ans.concat(b.slice(j));
            } else if (j === h) {
                ans = ans.concat(a.slice(i));
            } else if (a[i] > b[j]) {
                ans = ans.concat(b[j]);
                j += 1;
            } else {
                ans = ans.concat(a[i]);
                i += 1;
            }
            k++;
        }
    }
    return ans;
}

console.log(msort(s));

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let Node_1 = new ListNode(1);
Node_1.next = new ListNode(2);
Node_1.next.next = new ListNode(3);
console.log(Node_1);
function mknode(s, node = null) {
    pnode = new ListNode(s[0]);
    pnode.next = node;
    return s.length > 1 ? mknode(s.slice(1), pnode) : pnode;
}
let node = new ListNode(0);
let p = mknode([1]);
console.log(p);
while (p !== null) {
    console.log(p.val);
    p = p.next;
}
