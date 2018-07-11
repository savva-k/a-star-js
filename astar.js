const map = require('./map');
const Node = require('./Node');

map.forEach(element => {
console.log(element);
});

console.dir(new Node(1,1));
console.log(getElementAt(10, 1));

function getElementAt(x, y) {
    try {
        return map[x][y];
    } catch (e) {
        return false;
    }
}