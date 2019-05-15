/**
 * 当想向表中某个位置加入一个新元素的时候，如果索引为index的位置已经被占据了，就尝试index+1的位置。如果index+1的位置也被占据了，就尝试
 * index+2的位置，以此类推。
 */
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
         * 在一些编程语言中，我们需要定义数组的大小。如果使用线性探查的话，需要注意的一个问题是数组的可用位置可能会被用完。在JavaScript中，我们不需
         * 要担心这个问题，因为我们不需要定义数组的大小，它可以根据需要自动改变大小——这是JavaScript内置的一个功能。
         * @param {type: String, desc: '键值'} key 
         * @param {type: Any, desc: '存储的值'} value 
         */
        put(key, value) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            while(true) {
                if(hashList[hashCode] === undefined) {
                    hashList[hashCode] = new ValuePair(key, value);
                    break;
                }
                console.log(hashCode);
                hashCode ++ ;
            }
        }

        /**
         * 根据键值从散列表中移除值。
         * @param {type: Any, desc: '存储的值'} key 
         */
        remove(key) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            if(hashList[hashCode] !== undefined) {
                while(true) {
                    if(hashList[hashCode].key === key) {
                        hashList[hashCode] = undefined;
                        return true;
                    }
                    hashCode ++ ;
                }
            }
            return false;
        }

        /**
         * 返回根据键值检索到的特定的值。
         * @param {type: Any, desc: '存储的值'} key 
         */
        get(key) {
            let hashList = items.get(this);
            let hashCode = looselooseHashCode(key);
            if(hashList[hashCode] !== undefined) {
                while(true) {
                    if(hashList[hashCode].key === key) {
                        return hashList[hashCode].val;
                    }
                    hashCode ++ ;
                }
            }
            return undefined;
        }
    }
    return HashList;
})()

let sa = new HashList();

sa.put('Gandalf', 'gandalf@email.com');
sa.put('John', 'johnsnow@email.com');
sa.put('Tyrion', 'tyrion@email.com');
sa.put('Donnie', 'donnie@email.com');

console.log(sa.remove('Donnie'));

console.log(sa.get('Donnie'));

console.log(sa.get('John'));