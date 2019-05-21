const BinarySearchTree = (function () {
    let root = null;

    let insertNode = (prev, newNode) => {
        if (newNode.key < prev.key) {
            if (prev.left === null) {
                prev.left = newNode;
            } else {
                insertNode(prev.left, newNode);
            }
        } else {
            if (prev.right === null) {
                prev.right = newNode;
            } else {
                insertNode(prev.right, newNode);
            }
        }
    }

    let inOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback);
            callback && callback(node);
            inOrderTraverseNode(node.right, callback);
        }
    }

    let preOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            callback && callback(node);
            preOrderTraverseNode(node.left, callback);
            preOrderTraverseNode(node.right, callback);
        }
    }

    let postOrderTraverseNode = (node, callback) => {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback);
            postOrderTraverseNode(node.right, callback);
            callback && callback(node);
        }
    }

    let searchNode = (node, key) => {
        if (node === null) {
            return false;
        } else if (key < node.key) {
            return searchNode(node.left, key);
        } else if (key > node.key) {
            return searchNode(node.right, key);
        } else {
            return true;
        }
    }

    let getSubKey = (node,prev) => {
        if(prev.left.key === node.key) {
            return 'left'
        }
        return 'right'
    }

    let removeNode = (node, key, prev) => {
        if (node === null) {
            return false;
        } else if (key < node.key) {
            return removeNode(node.left, key, node)
        } else if (key > node.key) {
            return removeNode(node.right, key, node)
        } else {
            let subKey = getSubKey(node, prev);
            if (node.right === null && node.left === null) {
                prev[subKey] = null;
                return node;
            } else if (node.left === null) {
                prev[subKey] = node.right;
                return node;
            } else if (node.right === null) {
                prev[subKey] = node.left;
                return node;
            }

            let aux = findMinNode(node.right);
            node.key = aux.key;
            removeNode(node.right, aux.key, node);
            return node;
        }
    }

    let findMinNode = function (node) {
        while (node && node.left !== null) {
            node = node.left;
        }
        return node;
    };

    class Node {
        constructor(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
        }

        /**
         * 向树中插入一个新的键
         * @param {type: String, desc: '键值'} key 
         */
        insert(key) {
            let newNode = new Node(key);
            if (root === null) {
                root = newNode
            } else {
                insertNode(root, newNode);
            }
        }

        /**
         * 在树中查找一个键，如果节点存在， 则返回true；如果不存在，则返回false
         * @param {type: String, desc: '键值'} key 
         */
        search(key) {
            return searchNode(root, key);
        }

        /**
         * 中序遍历
         * @param {type: Function, desc: '回调函数'} callback
         */
        inOrderTraverse(callback) {
            inOrderTraverseNode(root, callback);
        }

        /**
         * 前序遍历
         * @param {type: Function, desc: '回调函数'} callback
         */
        preOrderTraverse(callback) {
            preOrderTraverseNode(root, callback);
        }

        /**
         * 后序遍历
         * @param {type: Function, desc: '回调函数'} callback
         */
        postOrderTraverse(callback) {
            postOrderTraverseNode(root, callback);
        }

        /**
         * 返回树中最小的值
         * @returns {type: any, desc: '最小值'}
         */
        min() {
            let current = root;
            while (current.left !== null) {
                current = current.left;
            }
            return current;
        }

        /**
         * 返回树中最大的值
         * @returns {type: any, desc: '最大值'}
         */
        max() {
            let current = root;
            while (current.right !== null) {
                current = current.right;
            }
            return current;
        }

        /**
         * 移除树中某个键
         * @param {*} key 
         */
        remove(key) {
            return removeNode(root, key, root);
        }
    }
    return BinarySearchTree;
})();

let print = obj => {
    console.log(obj.key);
}
let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.postOrderTraverse(print);

console.log(tree.search(1) ? 'Key 1 found.' : 'Key 1 not found.');
console.log(tree.search(8) ? 'Key 8 found.' : 'Key 8 not found.');

// tree.remove(7);
// tree.postOrderTraverse(print);

// tree.remove(8);
// tree.postOrderTraverse(print);

// tree.remove(15);
// tree.postOrderTraverse(print);

tree.remove(13);
tree.postOrderTraverse(print);