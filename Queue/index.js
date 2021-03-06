let Queue = (function () {
    const items = new WeakMap();
    class Queue {
        constructor() {
            items.set(this, [])
        }

        /**
         * 入队
         * @param {type: Any, desc: '向队列里添加的元素'} element 
         */
        enqueue(element) {
            let s = items.get(this);
            s.push(element);
        }

        /**
         * 出队， 移除队列第一项，并返回移除的元素
         * @returns {type: element, desc: '返回移出队列的第一项'} element
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
            return s.length;
        }

        /**
         * 打印队列
         */
        print() {
            let s = items.get(this);
            console.log(s.toString());
        }
    }

    return Queue
})()


let que = new Queue()

que.enqueue('小明')
que.enqueue('小红')
que.enqueue('小黑')
que.print()

console.log(que.front());

console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());
console.log(que.dequeue());

module.exports = Queue;

