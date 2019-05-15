import LinkedList from '../LinkList';
const HashList = (function() {
    let items = new WeakMap();

    let looselooseHashCode = key => {
        let hash = 0;
        for (let i = 0, len = key.length; i < len; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37; // 37决定了这个散列表的表长，这里最好取质数。
    }

    class ValuePair {
        constructor (key, value) {
            this.key = key;
            this.val = value;
        }

        toString() {
            return `${this.key}----${this.val}`
        }
    }

    class HashList {
        constructor() {
            items.set(this, []);
        }

        /**
         * 向散列表增加一个新的项（也能更新散列表）。
         * @param {type: String, desc: '键值'} key 
         * @param {type: Any, desc: '存储的值'} value 
         */
        put(key, value) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            if(hashList[hashCode] === undefined) {
                hashList[hashCode] = new LinkedList();
            }
            hashList[hashCode].append(new ValuePair(key, value));
        }

        /**
         * 根据键值从散列表中移除值。
         * @param {type: String, desc: '键值'} key 
         */
        remove(key) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            if(hashList[hashCode] !== undefined) {
                let current = hashList[hashCode].getHead();
                while(current) {
                    if(current.element.key === key) {
                        hashList[hashCode].remove(current.element);
                        if(hashList[hashCode].isEmpty()) {
                            hashList[hashCode] = undefined;
                        }
                        return true;
                    }
                    current = current.next;
                }
            }
            return false;
        }

        /**
         * 返回根据键值检索到的特定的值。
         * @param {type: String, desc: '键值'} key 
         */
        get(key) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            if(hashList[hashCode] !== undefined) {
                let current = hashList[hashCode].getHead();
                while(current) {
                    if(current.element.key === key) {
                        return current.element.val;
                    }
                    current = current.next;
                }
            }
            return undefined;
        }
    }
    return HashList;
})()