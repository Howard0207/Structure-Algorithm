/**
 * 图遍历算法的思想是必须追踪每个第一次访问的节点，并且追踪有哪些节点还没有被完全探索。
 * 对于BFS和DFS两种图遍历算法，都需要明确指出第一个被访问的顶点。
 */
let Dictionary = require('../Dictionary');
let Queue = require('../Queue');
console.log(Dictionary);
const Graph = (function () {
    let vertices = [];
    let adjList = new Dictionary();
    class Graph {

        /**
         * 添加顶点
         * @param {type: Sting, desc: "顶点"} v 
         */
        addVertex(v) {
            vertices.push(v);
            adjList.set(v, []);
        }

        /**
         * 添加边
         * @param {type: String, desc: "顶点"} v 
         * @param {type: String, desc: "顶点"} w 
         */
        addEdge(v, w) {
            adjList.get(v).push(w);
            adjList.get(w).push(v);
        }

        toString() {
            for (let i = 0, len = vertices.length; i < len; i++) {
                let temp = adjList.get(vertices[i]);
                let tempStr = temp.toString();
                console.log(vertices[i] + " -> " + tempStr);
            }
        }

        initializeColor() {
            let color = [];
            for (let i = 0, len = vertices.length; i < len; i++) {
                color[vertices[i]] = 'white';
            }
            return color;
        }

        /**
         * 广度优先搜索算法
         * @param {type: element, desc: "图的定点"} v 
         * @param {type: Function, desc: "每一个元素被探索后执行的回调"} callback 
         */
        bfs(v, callback) {
            let color = this.initializeColor();
            let queue = new Queue();
            queue.enqueue(v);
            while(!queue.isEmpty()) {
                let el = queue.dequeue();
                let neighbors = adjList.get(el);
                // color[el] = "gray";
                for(let i = 0, len = neighbors.length; i < len; i++) {
                    if(color[neighbors[i]] === "white") {
                        queue.enqueue(neighbors[i]);
                        color[neighbors[i]] = "gray";
                    }
                }
                color[el] = "black";
                callback && callback(el)
            }
        }

    }
    return Graph;
})();


var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; //{7}
for (var i = 0; i < myVertices.length; i++) { //{8}
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B'); //{9}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.toString();

function printNode(value){ //{16}
    console.log('Visited vertex: ' + value); //{17}
}
graph.bfs(myVertices[0], printNode); //{18}