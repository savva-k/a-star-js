const Node = require('./Node');

class Map {
    constructor(map) {
        this.nodesMap = [];

        for (let y = 0; y < map.length; y++) {
            this.nodesMap[y] = [];
            for (let x = 0; x < map[y].length; x++) {
                this.nodesMap[y][x] = new Node(x, y, map[y][x]);
            }
        }
    }

    print(path) {
        console.log('\n');
        let n = 0;

        if (path) {
            path.forEach(pathNode => this.getNodeAt(pathNode.x, pathNode.y).setValue('P'));
        }

        for (let y = 0; y < this.getMaxY(); y++) {
            let str = '';

            for (let x = 0; x < this.getMaxX(); x++) {
                str += this.getNodeAt(x, y).getValue() + '_';
            }

            console.log(str);
        }
    }

    getNodeAt(x, y) {
        try {
            return this.nodesMap[y][x];
        } catch (e) {
        }
    }

    getMaxY() {
        return this.nodesMap.length;
    }

    getMaxX() {
        return this.nodesMap[0].length;
    }

}

module.exports = Map;
