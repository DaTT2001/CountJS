//bai1
const arrNum = [1, 2, 4, 7];
// const arrNum2 = [2,2]
function x2Arr(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
console.log(x2Arr(arrNum));
//bai2
function checkEvenNum(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(checkEvenNum(arrNum));
//bai 3
function creatArr(input) {
  const result = [];
  for (let i = 0; i <= input; i++) {
    result.push(i);
  }
  return result;
}
console.log(creatArr(4));
//bai 4
function creatArrRotate(input) {
  const result = [];
  for (let i = input; i >= 0; i--) {
    result.push(i);
  }
  return result;
}
console.log(creatArrRotate(4));
//bai 5
function checkSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum == arr[0]) {
    return arr[0];
  } else {
    return null;
  }
}
console.log(checkSum(arrNum));
//bai 5
function checkSum1(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (sum - arr[i] === arr[i]) {
      return arr[i];
    }
  }
  return null;
}
console.log(checkSum1(arrNum));
