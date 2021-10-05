var mergeTwoLists = function (l1, l2) {
    let ans = [],
        a;
    if (l1 === null && l2 === null) {
        let dummy = new ListNode(null);
        return dummy.next;
    }

    if (l1 !== null) {
        while (l1 !== null) {
            a = l1 !== null ? l1.val : [];
            ans = ans.concat(a);
            l1 = l1 !== null ? l1.next : null;
        }
    }
    if (l2 !== null) {
        while (l2 !== null) {
            a = l2 !== null ? l2.val : [];
            ans = ans.concat(a);
            l2 = l2 !== null ? l2.next : null;
        }
    }
    ans = msort(ans).reverse();
    ans = mknode(ans);
    return ans;
};

function mknode(s, node = null) {
    pnode = new ListNode(s[0]);
    pnode.next = node;
    return s.length > 1 ? mknode(s.slice(1), pnode) : pnode;
}

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

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let a = [1, 2, 4],
    b = [1, 3, 4];
console.log(mknode(a), mknode(b));
a = mknode(b);
b = mknode(b);
let ans = mergeTwoLists(a, b);
while (ans != null) {
    console.log(ans.val);
    ans = ans.next;
}
