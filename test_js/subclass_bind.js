class pclass {
    constructor() {
        this.n = 0;
    }
    adder() {
        this.n++;
        console.log("pclass", this);
        if (this.n < 10) {
            setTimeout(this.adder.bind(this), 1000);
        }
    }
}

class sclass extends pclass {
    constructor() {
        super();
    }
    adder() {
        super.adder();
    }
}

let p = new sclass();
p.adder();
