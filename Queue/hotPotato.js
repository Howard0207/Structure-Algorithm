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


function hotPotato(nameList, number) {
    var queue = new Queue();
    for (let i = 0, len = nameList.length; i < len; i++) {
        queue.enqueue(nameList[i]);
    }
    let eliminated = '';
    while (queue.size() > 1) {
        for(let i = 0; i < number; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminated = queue.dequeue();
        console.log(eliminated + "----在击鼓传花中被淘汰----");
    }
    console.log(queue.dequeue() + "在击鼓传花中获得胜利！！！");
}

hotPotato(['Any', 'Amy', 'Green', 'Tom', 'Thompon', 'Bro', 'James', 'Aviral'], 8);