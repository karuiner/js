class cal {
    constructor(value) {
        this.value = value;
    }

    add(b) {
        this.value += b;
        return this.value;
    }

    minus(b) {
        this.value -= b;
        return this.value;
    }

    times(b) {
        this.value *= b;
        return this.value;
    }

    divide(b) {
        this.value /= b;
        return this.value;
    }

    sqrt(b = undefined) {
        if (b !== undefined) {
            return Math.sqrt(b);
        } else {
            this.value = Math.sqrt(this.value);
            return this.value;
        }
    }
}

let p = new cal(1);
console.log(p.add(2));
console.log(p.add(8));
console.log(p.add(-2));
console.log(p.value);
