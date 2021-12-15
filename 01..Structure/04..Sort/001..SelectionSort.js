// 선택정렬
// 제대로 하려면(자리 바꾸는 것까지)
let input = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let sortedArr = [];

let length = input.length;

// 주의해야 할 상항 : pop을 하면 length 가 줄어듬

// for (let i =0; i< length; i++) {
//     console.log(input.pop());
//     console.log(i);
// }

for (let i =0; i< length; i++) {
    let minNumber = Math.min(...input);
    sortedArr.push(minNumber);
    input.splice(input.indexOf(minNumber), 1);
}

console.log(sortedArr);

/////////////////////////////////////////////////////////////////////////////////////
console.log("///////////////////////////////////////////////////////////////////////////")

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        // 자리바꿈
        let temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(selectionSort(arr));