
let LinkedList = (function () {
    let length = 0;
    let head = null;
    class Node {
        constructor(ele) {
            this.element = ele;
            this.next = null;
        }
    }

    class LinkedList {

        /**
         * 向链表尾部添加新的元素
         * @param {type: Any, desc: '插入的元素'} element 
         */
        append(element) {
            let node = new Node(element), current;
            if (head === null) {
                head = node;
            } else {
                current = head;

                //循环链表直到最后一项
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            length++;
        }

        /**
         * 向链表指定位置插入一个元素
         * @param {type: Number, desc: '插入位置'} position 
         * @param {type: Any, desc: '插入的元素'} element 
         */
        insert(position, element) {
            let node = new Node(element);
            let current = head;
            let previous = null;
            if (position > -1 && position < length) {
                if (position === 0) {
                    node.next = current;
                    head = node;
                } else {
                    for (let i = 0; i < position; i++) {
                        previous = current;
                        current = current.next;
                    }
                    node.next = current;
                    previous.next = node;
                }
                length++;
                return true;
            } else {
                return false;
            }
        }

        /**
         * 删除指定位置的元素
         * @param {type: Number, desc: '删除元素的位置'} position 
         */
        removeAt(position) {
            if (-1 < position && position < length) {
                let current = head,
                    previous, index = 0;
                if (position === 0) {
                    head = current.next;
                }
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                length--;
                return current.next;
            } else {
                return null;
            }
        }

        /**
         * 删除指定的元素
         * @param {type: Any, desc: '想要删除的元素'} element 
         */
        remove(element) {
            let index = this.indexOf(element);
            return this.removeAt(index);
        }

        /**
         * 获取元素的索引位置
         * @param {type: Any, desc: '查找的元素'} element 
         */
        indexOf(element) {
            let index = 0;
            let current = head;
            while (current) {
                if (current.element === element) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        }

        /**
         * 判断链表是否为空
         */
        isEmpty() {
            return length === 0;
        }

        /**
         * 获取链表的长度
         */
        size() {
            return length;
        }

        /**
         * 获取头节点的元素
         */
        getHead() {
            return head;
        }

        /**
         * 重写对象toString() 方法
         */
        toString() {
            let current = head,
                string = '';
            while (current) {
                string += current.element + (current.next ? 'n' : '');
                current = current.next;
            }
            return string;
        }
    }
    return LinkedList;
})()


let link = new LinkedList();
link.append('小红')
link.append('小白')
link.append('小蓝')
link.append('小绿')
link.append('小灰')
link.append('小紫')

link.removeAt(3);