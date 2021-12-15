// 삽입정렬

let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let sortedArr = [];
let arrLength = input.length;

function insertIndex(_sortedArr, _insertValue) {
    for (const i in _sortedArr) {
        if (_insertValue < _sortedArr[i]) {
            return i
        }
    }
    return sortedArr.length;
}

for (let i = 0; i < arrLength; i++) {
    let insertValue = input.shift();
    let index = insertIndex(sortedArr, insertValue);
    sortedArr.splice(index, 0, insertValue);
    console.log(`index : ${index}\n input : ${input}\n sortedArr : ${sortedArr}\n`)
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));