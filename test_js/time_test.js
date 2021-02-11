function test(s, e, nth) {
    let ds = (e - s) / nth,
        a,
        b,
        db = { ans: 0 };
    for (let i = 0; i < nth; i++) {
        if (i === 0) {
            // tb.push([s + i * ds, s + (i + 1) * ds]);
        } else {
            // tb.push([s + i * ds + 1, s + (i + 1) * ds]);
        }
        a = i === 0 ? s + i * ds : s + i * ds + 1;
        b = s + (i + 1) * ds;
        setTimeout(add, 0, a, b, db, "ans");
    }
    setTimeout(() => console.log(db), 1000);

    function add(a, b, db, key) {
        let s = 0;
        while (a <= b) {
            s += a;
            a++;
        }
        db[key] += s;
    }
}

test(0, 1e10, 10);
//p = setTimeout(add, 1000, 1, 1);
