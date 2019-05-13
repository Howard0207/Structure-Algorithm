const Dictionary = (function () {
    let items = new WeakMap();
    class Dictionary {
        constructor() {
            items.set(this, {});
        }

        /**
         * 
         * @param {*} key 
         * @param {*} value 
         */
        set(key, value) {
            let dict = items.get(this);
            dict[key] = value;
        }

        /**
         * 通过使用键值来从字典中移除键值对应的数据值。 (delete在IE下是一个预留字，使用会报错。谨慎使用。)
         * @param {*} key 
         */
        delete(key) {
            if (this.has(key)) {
                let dict = items.get(this);
                delete dict[key];
                return true;
            } else {
                return false;
            }
        }

        /**
         * 如果某个键值存在于这个字典中，则返回true，反之则返回false。
         * @param {type: String, desc: '字典中的键值'} key 
         * @returns {type: Boolean, desc: '字典存在返回真，反之为假'}
         */
        has(key) {
            let dict = items.get(this);
            return key in dict;
        }

        /**
         * 通过键值查找特定的数值并返回。
         * @param {*} key 
         */
        get(key) {
            let dict = items.get(this);
            return dict[key];
        }

        /**
         * 清空字典
         */
        clear() {
            items.set(this, {});
        }

        /**
         * 返回字典所包含元素的数量。与数组的length属性类似。
         */
        size() {
            return this.keys().length;
        }

        /**
         * 将字典所包含的所有键名以数组形式返回。
         */
        keys() {
            let dict = items.get(this);
            return Object.keys(dict);
        }

        /**
         * 将字典所包含的所有数值以数组形式返回
         */
        values() {
            let dict = items.get(this);
            let values = [];
            for (let key in dict) {
                if (this.has(key)) {
                    values.push(dict[key]);
                }
            }
            return values;
        }
    }
    return Dictionary;
})()

let dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');

console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));
dictionary.delete('John');
console.log(dictionary.has('Gandalf'));
console.log(dictionary.size());
console.log(dictionary.values());
console.log(dictionary.get('Tyrion'));