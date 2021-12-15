// 
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 
// 피봇을 2개 사용하는 경우도 있음.

//피봇값 : 66
[54, 32, 10, 5, 11, 15] + [66] + [77]

//피봇값 : 54(66과 77은 값이 한 개이기 때문에 더이상 재귀로 호출되지 않음.)
[32, 10, 5, 11, 15], [54] + [66] + [77]

//피봇값 : 32
[10, 5, 11, 15], [32] + [54] + [66] + [77]

//피봇값 : 10 
[5] + [10], [11, 15] + [32] + [54] + [66] + [77]

//피봇값 : 11
[5] + [10] + [11] + [15] + [32] + [54] + [66] + [77]


let inputArr = [66, 77, 54, 32, 10, 5, 11, 15];
function qucikSort(_input){
    let inputLength = _input.length;

    if (inputLength <= 1) {
        return _input
    }

    const pivotValue = [_input.shift()]; //기준점
    const firstGroup = [];
    const secondGroup = [];

    for (let i in _input) {
        if (_input[i] < pivotValue) {
            firstGroup.push(_input[i]);
        } else {
            secondGroup.push(_input[i]);
        }
    }

    console.log(`firstGroup : ${firstGroup}\n secondGroup : ${secondGroup}\n pivotValue : ${pivotValue}\n`);

    return qucikSort(firstGroup).concat(pivotValue, qucikSort(secondGroup));

}

console.log(qucikSort(inputArr));

// case 2
// 참고용 
function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }

    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];

    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}