//  Merge Sort, 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// Step 1 - 배열의 길이가 1이 되기 전까지 계속해서 반으로 나눈다.

let inputArr = [5, 10, 66, 77, 54, 32, 11, 15];

function mergeSort(_inputArr) {
    let inputLength = _inputArr.length;
    let resultArr = [];
    
    if (inputLength <= 1) {
        return _inputArr;
    }

    let middleValue = parseInt(inputLength / 2);
    let firstGroup = mergeSort(_inputArr.slice(0, middleValue));
    let secondGroup = mergeSort(_inputArr.slice(middleValue));
    // return `firstGroup : ${firstGroup}\n secondGroup : ${secondGroup}\n`

    while(firstGroup.length != 0 && secondGroup.length != 0) {
        if (firstGroup[0] < secondGroup[0]) {
            resultArr.push(firstGroup.shift());
        } else {
            resultArr.push(secondGroup.shift());
        }
    }

    while(firstGroup.length != 0) {
        resultArr.push(firstGroup.shift());
    }
    while(secondGroup.length != 0) {
        resultArr.push(secondGroup.shift());
    }

    // console.log(resultArr);
    return resultArr
}

console.log(mergeSort(inputArr));