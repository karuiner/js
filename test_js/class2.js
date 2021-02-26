class ball {
    constructor(name, weight, radius) {
        this.name = name;
        this.weight = weight;
        this.radius = radius;
    }
    get density() {
        return (this.weight / (4 / 3)) * this.radius ** 3;
    }
}

class falling_ball extends ball {
    get vel() {
        return 9.8 * this.weight;
    }
}
