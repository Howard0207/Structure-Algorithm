let Stack = (function () {
    let items = new WeakMap();
    class Stack {
        constructor() {
            items.set(this, []);
        }

        /**
         * 添加一个新元素到栈顶。
         */
        push(element) {
            let s = items.get(this);
            s.push(element);
        }

        /**
         * 移除栈顶的元素，同时返回被移除的元素。
         */
        pop() {
            let s = items.get(this);
            return s.pop();
        }

        /**
         * 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。
         */
        peek() {
            let s = items.get(this);
            return s[s.length - 1];
        }

        /**
         * 如果栈里没有任何元素就返回true，否则返回false。
         */
        isEmpty() {
            let s = items.get(this);
            return s.length === 0;
        }

        /**
         * 移除栈里的所有元素。
         */
        clear() {
            let s = items.get(this);
            s.length = 0;
        }

        /**
         * 返回栈里的元素个数。这个方法和数组的length属性很类似。
         */
        size() {
            let s = items.get(this);
            return s.length;
        }

        print() {
            let s = items.get(this);
            console.log(s.toString())
        }
    }
    return Stack;
})()

/**
 * 进制转换
 * @param {Type: Number, desc: 传入的10进制数 } decNumber 
 * @param {Type: Number, desc: 传入的想要转换的进制数} base
 * @return {Type: String, desc: 转换后的数字字符串} binaryString
 */
function divideBy2 (decNumber,base) {
    let stack = new Stack(), remainder, binaryString = '', digits = '0123456789ABCDEF';
    base = base || 2;
    while(decNumber>0) {
        remainder = Math.floor(decNumber % base);
        stack.push(remainder);
        decNumber = Math.floor(decNumber / base);
    }
    while(!stack.isEmpty()) {
        binaryString += digits[stack.pop().toString()];
    }
    return binaryString;
}

let bin = divideBy2(78, 16);
console.log(bin);