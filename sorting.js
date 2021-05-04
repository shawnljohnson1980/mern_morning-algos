// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let x = 0; x < arr.length; x++) {
//             if (arr[x] > arr[x + 1]) {
//                 let tmp = arr[x];
//                 arr[x] = arr[x + 1];
//                 arr[x + 1] = tmp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([1, 6, 12, 9, 6, 4, 15]))


// function selectSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let x = i + 1; x < arr.length; x++) {
//             if (arr[x] + 1 > arr[x]) {
//                 min = x
//             }
//         }
//         for (x = i + 1; x < arr.length; x++) {
//             if (arr[x] < arr[min]) {
//                 min = x
//             }
//         }
//         if (xmin != i) {
//             swap(arr[i], a[xmin])
//         }
//     }
// }

// function insertionSort(arr) {
//     var sorted = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (sorted.length == 0 || arr[i] >= sorted[sorted.length - 1])
//             sorted.push(arr[i]);
//         else if (arr[i] <= sorted[0])
//             sorted.splice(0, 0, arr[i]);
//         else {
//             for (var j = 0; j < sorted.length; j++) {
//                 if (arr[i] >= sorted[j]) {
//                     sorted.splice(j + 1, 0, arr[i]);
//                     break;
//                 }
//             }
//         }
//     }
//     return sorted;
// }
// console.log(insertionSort([3, 7, 4, 2, 9, 8, 5, 1]))

// function insertsort(myArray) {
//     if (myArray.length <= 1) {
//         return;
//     }
//     for (var x = 1; x < myArray.length; x++) {
//         for (y = 0; y < x; y++) {
//             if (myArray[x] < myArray[y]) {
//                 var temp = myArray.splice(x, 1);
//                 myArray.splice(y, 0, temp[0]);
//             }
//         }
//     }
// }
// console.log(insertsort([3, 7, 4, 2, 9, 8, 5, 1]))

function insertSort(arr) {
    var sortedArr = [];
    var tempArr = [];
    sortedArr.push(arr[0]);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > sortedArr[sortedArr.length - 1]) {
            sortedArr.push(arr[i + 1])
        } else {
            for (var j = 0; j < sortedArr.length; j++) {
                var smaller = sortedArr.length - 1;
                while (sortedArr[smaller] > arr[i + 1] && sortedArr[smaller] != undefined) {
                    tempArr.push(sortedArr[smaller]);
                    sortedArr.pop();
                    smaller -= 1;
                }
            }
            sortedArr.push(arr[i + 1]);
            while (tempArr.length != 0) {
                sortedArr.push(tempArr[tempArr.length - 1]);
                var t = tempArr.pop();
            }
        }
    }
    return sortedArr;
}
console.log(insertSort([3, 7, 4, 2, 9, 8, 5, 1]))
