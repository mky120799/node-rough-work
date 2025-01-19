function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i;
        }
    }
    return -1;
}

function binarySearch() {
    // To be implemented
}

export const linear = linearSearch;
export const binary = binarySearch;