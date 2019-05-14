/**
 * 散列表（Hash table，也叫哈希表），是根据关键码值(Key value)而直接进行访问的数据结构。也就是说，它通过把关键码值映射到表中一个位置来访问记录，以加快查找的速度。这个映射函数叫做散列函数，存放记录的数组叫做散列表。
 * 给定表M，存在函数f(key)，对任意给定的关键字值key，代入函数后若能得到包含该关键字的记录在表中的地址，则称表M为哈希(Hash）表，函数f(key)为哈希(Hash) 函数。
 */

const HashTable = (function () {
    let table = new WeakMap();
    let loseloseHashCode = key => {
        let hash = 0; //{1}
        for (let i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i); //{3}
        }
        return hash % 37; //{4}
    };
    class HashTable {
        constructor() {
            table.set(this, []);
        }

        /**
         * 向散列表增加一个新的项（也能更新散列表）。
         * @param {*} key 
         * @param {*} value 
         */
        put(key, value) {
            let hashTable = table.get(this); 
            let position = loseloseHashCode(key);
            console.log(position + ' - ' + key);
            hashTable[position] = value;
        }

        /**
         * 根据键值从散列表中移除值。
         * @param {*} key 
         */
        remove(key) {
            let hashTable = table.get(this); 
            hashTable[loseloseHashCode(key)] = undefined;
        }

        /**
         * 返回根据键值检索到的特定的值。
         * @param {*} key 
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