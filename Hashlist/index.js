/**
 * 散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。
 * 给定表M，存在函数f(key)，对任意给定的关键字值key，代入函数后若能得到包含该关键字的记录在表中的地址，则称表M为哈希(Hash）表，函数f(key)为哈希(Hash) 函数。
 */


/**
 * a better mapping function
 * @param {*} key 
 */
var djb2HashCode = function (key) {
    var hash = 5381;
    for (var i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}

const HashTable = (function () {
    let table = new WeakMap();
    let loseloseHashCode = key => {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    class HashTable {
        constructor() {
            table.set(this, []);
        }

        /**
         * 向散列表增加一个新的项（也能更新散列表）。
         * @param {type: String, desc: '键值'} key 
         * @param {type: Any, desc: '存储的值'} value 
         */
        put(key, value) {
            let hashTable = table.get(this);
            let position = loseloseHashCode(key);
            console.log(position + ' - ' + key);
            hashTable[position] = value;
        }

        /**
         * 根据键值从散列表中移除值。
         * @param {type: String, desc: '键值'} key 
         */
        remove(key) {
            let hashTable = table.get(this);
            hashTable[loseloseHashCode(key)] = undefined;
        }

        /**
         * 返回根据键值检索到的特定的值。
         * @param {type: String, desc: '键值'} key 
         */
        get(key) {
            let hashTable = table.get(this);
            return hashTable[loseloseHashCode(key)];
        }
    }
    return HashTable;
})();

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

/**
 * 通过loseloseHashCode映射函数进行映射时，可能会出现映射地址冲突进而导致数据被覆盖。当我们使用一种数据结构的时候，我们是希望能够保存全部数据，而不是丢失
 * 这些数据。当发生这种情况时，我们就要想办法去解决他-》 分离链接、先行探查。
 */