let dname = "d";
class typeA {
    constructor() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
        this.name = "d";
    }
    [dname]() {
        console.log("innner d", this);
        setTimeout(this.d, 2000);
    }
}
class typeB extends typeA {
    constructor() {
        super();
        this.e = 4;
        this.name = "old";
    }

    d() {
        console.log("outterd ", this.a);
    }
}
let tb = new typeB();
tb.d();
