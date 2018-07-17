const Map = require('./Map');
const Astar = require('./Astar');

let map = [];

map.push([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', 'x', 'x', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', ' ', 'x', 'x', 'x', 'x', ' ']);
map.push([' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', 'x', ' ', ' ', ' ', ' ', ' ']);
map.push([' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']);

let nodesMap = new Map(map);
let start = nodesMap.getNodeAt(9, 0);
let target = nodesMap.getNodeAt(0, 9);

nodesMap.print();

let path = new Astar().getShortestPath(nodesMap, start, target);

nodesMap.print(path);
