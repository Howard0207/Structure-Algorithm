/**
 * 归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
 * 个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
 * @param {type: Array} left
 * @param {type: Array} right
 */

const merge = (left, right) => {
    let i = 0,
        j = 0;
    const res = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        res.push(left[i]);
        i++;
    }
    while (j < right.length) {
        res.push(right[j]);
        j++;
    }
    return res;
};

const mergeSort = (arr) => {
    const length = arr.length;
    if (length === 1) {
        return arr;
    }
    const mid = Math.floor(length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
};

const arr = [0, 0, 1, 2, 4, 2, 2, 3, 1, 4];
console.log(mergeSort(arr));
