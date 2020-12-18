const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const bubbleSort = (arr) => {
    const length = arr.length;
    let i, j;
    for (i = 0; i < length; i++) {
        for (j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

const arr = [1, 23, 72, 0, 4, 6, 7, 3, 2];
console.log(bubbleSort(arr));
