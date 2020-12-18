/**
 * 选择排序算法是一种原址比较排序算法。选择排序大致的思路是找到数据结构中的最小值并
 * 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推。
 */

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const selectSort = (arr) => {
    const length = arr.length;
    let i, j, idx;
    for (i = 0; i < length - 1; i++) {
        idx = i;
        for (j = i + 1; j < length; j++) {
            if (arr[idx] > arr[j]) {
                idx = j;
            }
        }
        if (i !== idx) {
            swap(arr, i, idx);
        }
    }
    return arr;
};

const arr = [1, 23, 72, 0, 4, 6, 7, 3, 2];
console.log(selectSort(arr));
