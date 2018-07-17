const map = require('./Map');

class Astar {

    getShortestPath(map, start, target) {
        let passed = new Set();
        let open = new Set([ start ]);
        let from = new Map();

        start.setG(0);
        start.setF(start.getG() + this.heuristic(start, target));

        while (open.size > 0) {
            let current = this.findNodeWithMinimalF(open);
            let neighbours = this.getNeighbours(map, current);

            if (current == target) {
                return this.createPath(from, current)
            }
            open.delete(current);
            passed.add(current);

            neighbours
                .filter(neighbour => !passed.has(neighbour))
                .forEach(neighbour => {
                    let tempG = current.getG() + this.heuristic(current, neighbour);

                    if (!open.has(neighbour) || (tempG > neighbour.getG())) {
                        neighbour.setG(tempG);
                        neighbour.setF(neighbour.getG() + this.heuristic(neighbour, target));
                        from.set(neighbour, current);
                    }
                    if (!open.has(neighbour)) {
                        open.add(neighbour);
                    }
                });
        }
    }

    createPath(stepsMap, target) {
        let path = [ target ];
        let current = target;

        while (current = stepsMap.get(current)) {
            path.push(current);
        }
    
        return path;
    }

    heuristic(current, target) {
        let width = current.x - target.x;
        let height = current.y - target.y;

        return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    }

    getNeighbours(map, current) {
        let neighbours = new Set();
        let possibleShifts = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        possibleShifts.forEach(shift => {
            let x = current.x + shift[0];
            let y = current.y + shift[1]
            let neighbour = map.getNodeAt(x, y);

            if (neighbour && neighbour != current && neighbour.isPassable()) {
                neighbours.add(neighbour);
            }        
        });

        return Array.from(neighbours);
    }

    findNodeWithMinimalF(nodes) {
        return Array.from(nodes).sort(((node1, node2) => node1.getF() - node2.getF()))[0];
    }
}

module.exports = Astar;
