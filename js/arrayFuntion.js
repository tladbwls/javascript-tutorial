// 일반적으로 배열은 for문으로 접근한다. 하지만 최근에는 forEach, map, filter 등의 메서드를 활용해 배열에 접근한다.

// 1. forEach
// - forEach 메서드는 배열이 가지고 있는 요소를 콜백 함수의 파라미터를 사용해서 호출한다.
// - signiture : array.forEach((value, index, array) => {})
// - 콜백 함수의 파라미터로 3가지 값을 가져올 수 있다. 하지만 마지막 파라미터인 배열 반환은 잘 사용되지 않는다.

// function abc(a, b) {
//   return a + b;
// }

// cd((a, b) => {
//   return a + b;
// });

const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arrs.forEach((arr, index) => {
  //console.log(arr);
  //console.log(index);
  //   console.log(array);
});

//return a+b = (a,b) =>a+b

// - 배열의 모든 요소 합

const numbers = [22, 33, 44, 55];
let sum = 0;
numbers.forEach((element) => {
  //console.log(element);
  sum += element;
});
//console.log(sum);
// 2. map
// - map 메서드는 콜백 함수의 파라미터로 배열의 요소를 반환하는 것을 forEach와 같지만 반환한 요소를 새로은 배열에 담아 return할 수 있다는 점이 다르다.
const newArr = numbers.map((number, index, array) => {
  //console.log(number);
  //console.log(index);
  //console.log(array);
  return number * 2;
});

//console.log(newArr);
//console.log(numbers);
// 3. filter
// - filter 메서드는 콜백 함수에서 리턴되는 값을 특정 조건에 대입하고 true인 요소만 모아 새로운 배열을 만든다.
//-fiilter 매서드는 map과 같이 return 키워드로 값을 반환할 수 있다.
const even = arrs.filter((arr, index, array) => {
  //console.log(arr);
  return arr % 2 === 0;
});
console.log(even);
console.log(arrs);

// 4. reduce << 프론트에서는 잘 사용 안하기 때문에 천천히 이해해도 됨
// - signiture : array.reduce((accumulator(누적값),currentValue(현재값),currentIndex(현재인덱스),array(원래배열)) => {})
const reduceArr = [0, 1, 2, 3, 4];
const reduceNumber = reduceArr.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  //0까지의 누적한 합산값 0
  //0,1 까지의 누적 합산값 0+1
  //0,1,2 까지의 누적 합산값 0+1+2
  //0,1,2,3 까지의 누적 합산값 0+1+2+3
  //0,1,2,3,4 까지의 누적 합산값 0+1+2+3+4

  console.log(currentValue);
  // 두번째 값부터 표시된다.
  //0,1 까지의 합산값 1
  //0,1,2 까지의 합산값 2
  //0,1,2,3 까지의 합산값 3
  //0,1,2,3,4 까지의 합산값 4
  return accumulator + currentValue;
});
console.log(reduceNumber);
