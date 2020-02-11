let arr : Array<number> = [1, 3, 4, 6, 7, 2, 0, 5];
let sortedArray = arr.sort();


// This is binarySearch
console.log(sortedArray);   
const binarySearch = (arr, left, right, value) => {
    if (right >= left) {
        console.log('1');
        var mid = 1 + Math.floor((right - left)/2);
        console.log(mid);
        if (arr[mid] == value) {
            console.log('2');
            return mid;
        } else if (arr[mid] > value) {
            console.log('3');
            return binarySearch(arr, left, mid - 1, value);
        } else {
            console.log('4');
            return binarySearch(arr, mid + 1, right, value);
        }
    } else {
        return -1;
    }
}

console.log(binarySearch(sortedArray, 0, sortedArray.length - 1, 0));

// console.log(binarySearch(sortedArray, 0, sortedArray.length - 1, 7));
