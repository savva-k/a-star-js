class Node {
    
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }

    setG(g) {
        this.g = g;
    }

    getG() {
        return this.g;
    }

    setF(f) {
        this.f = f;
    }

    getF() {
        return this.f;
    }

    isPassable() {
        return this.value !== 'x';
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }
}

module.exports = Node;
