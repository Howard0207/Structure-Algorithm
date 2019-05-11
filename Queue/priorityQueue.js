const PriorityQueue = (function () {
    const items = new WeakMap();
    class Element {
        constructor(element, priority) {
            this.element = element;
            this.priority = priority;
        }
    }
    class PriorityQueue {
        constructor() {
            items.set(this, []);
        }

        /**
         * 入队
         * @param {type: Any, desc: '向队列里添加的元素'} element 
         */
        enqueue(element, priority) {
            let s = items.get(this);
            let ele = new Element(element, priority);
            let added = false;
            for (var i = 0, len = s.length; i < len; i++) {
                if (priority < s[i].priority) {
                    s.splice(i, 0, ele);
                    added = true;
                    break;
                }
            }
            if (!added) {
                s.push(ele);
            }
        }

        /**
         * 出队， 移除队列第一项，并返回移除的元素
         */
        dequeue() {
            let s = items.get(this);
            let r = s.shift();
            return r;
        }

        /**
         * 返回队列第一项，但队列不做变动
         */
        front() {
            let s = items.get(this);
            return s[0];
        }

        /**
         * 判断当前队列是否为空
         */
        isEmpty() {
            let s = items.get(this);
            return s.length === 0;
        }

        /**
         * 返回队列长度
         */
        size() {
            let s = items.get(this);
            return s.legnth;
        }

        /**
         * 打印队列
         */
        print() {
            let s = items.get(this);
            for (var i = 0, len = s.length; i < len; i++) {
                console.log(`${s[i].element} --- ${s[i].priority}`)
            }
        }
    }
    return PriorityQueue;
})()


let pq = new PriorityQueue();

pq.enqueue("小红", 1);
pq.enqueue("小白", 3);
pq.enqueue("小黑", 10);
pq.enqueue("小紫",3);

pq.print();
