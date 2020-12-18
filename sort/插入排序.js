/**
 * 当前位置数据是待在原地还是插入到它前面的某个位置
 * 算法复杂度为 { n * (n-1) / 2 } -> O(n²)
 * @param {type: Array, desc: 待排序数组} arr
 */
const insertSort = function (arr) {
    const length = arr.length;
    let i, j, temp;
    for (i = 1; i < length; i++) {
        temp = arr[i];
        j = i;
        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
    return arr;
};
const arr = [1, 23, 72, 0, 4, 6, 7, 3, 2];
console.log(insertSort(arr));
