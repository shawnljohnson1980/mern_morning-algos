function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (arr[x] > arr[x + 1]) {
                let tmp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1, 6, 12, 9, 6, 4, 15]))


function selectSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let x = i + 1; x < arr.length; x++) {
            if (arr[x] + 1 > arr[x]) {
                min = x
            }
        }
        for (x = i + 1; x < arr.length; x++) {
            if (arr[x] < arr[min]) {
                min = x
            }
        }
        if (xmin != i) {
            swap(arr[i], a[xmin])
        }
    }
}
