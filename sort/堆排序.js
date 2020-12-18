/**
 *
 *
 *
 *
 *
 *
 */
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const buildHeap = (arr) => {
    const heapSize = arr.length;
    for (let i = heapSize / 2; i >= 0; i--) {
        heapify(arr, heapSize, i);
    }
};

const heapify = (arr, heapSize, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest !== i) {
        swap(arr, largest, i);
        heapify(arr, heapSize, largest);
    }
};

const heapSort = (arr) => {
    let heapSize = arr.length;
    buildHeap(arr);
    while (heapSize > 1) {
        heapSize--;
        swap(arr, 0, heapSize);
        x;
    }
    return arr;
};

const arr = [1, 4, 5, 2, 6, 1, 8, 2];

console.log(heapSort(arr));
