// 조건문은 프로그램의 흐름을 변경할 때 사용된다. 특정 조건에 따라 흐름이 분기되는데, 해당 조건은 boolean 타입으로 지정된다.

// 1. signiture : if(condition){true logic} else {false logic}
// 조건은 boolean 타입이 리턴되기 때문에 비교 연산이나 논리 연산의 값을 사용한다.

if (true) {
  console.log(true);
} else {
  console.log(false);
}

const a = 3;
const b = 3;
const c = 5;

if (a > 1) {
  console.log(true);
} else {
  console.log(false);
}

if (a === b || b === c) {
  console.log(true);
} else {
  console.log(false);
}
// 2. 중첩 if 조건문
const date = new Date();
console.log(date);
const hour = date.getHours();
console.log(hour);

// if (hour > 12) {
//   console.log("오후입니다.");
// } else {
//   if (hour <= 9 && hour > 6) {
//     console.log("아침입니다.");
//   } else {
//     console.log("점심입니다.");
//   }
//   console.log("오전입니다.");
// }

// 3. if else if 조건문
// const date = new Date();
// console.log(date);
// const hour = date.getHours();
// console.log(hour);

if (hour >= 18) {
  console.log("저녁입니다");
} else if (hour >= 12 && hour < 18) {
  console.log("점심입니다.");
} else {
  console.log("아침입니다.");
}

// 4. switch 조건문
// switch 조건문은 조건식이 true일 경우 조건식 각각의 상황을 분개한다.
// signiture : switch(condition) {case : true logic}
// 특정 조건이 true일 때 그 이하는 실행을 멈춰야 한다. 이때 break를 만들어준다.
// const value = 2;
// switch (value) {
//   case 0:
//     console.log("0입니다.");
//     break;
//   case 1:
//     console.log("1입니다.");
//     break;
//   case 2:
//     console.log("2입니다.");
//     break;
//   default:
//     console.log("2보다 크거나 0보다 작은 수 입니다.");
// }

// const tti = 2022 % 12;
const inputYear = prompt();
//console.log(typeof year);
const year = Number(inputYear); //% 12

let result = "";

switch (year % 12) {
  case 6:
    result = "호랑";
    break;
  case 7:
    result = "토끼";
    break;
  case 8:
    result = "용";
    break;
  case 9:
    result = "뱀";
    break;
  case 10:
    result = "말";
    break;
  case 11:
    result = "양";
    break;
  case 0:
    result = "원숭이";
    break;
  case 1:
    result = "닭";
    break;
  case 2:
    result = "개";
    break;
  case 3:
    result = "돼지";
    break;
  case 4:
    result = "쥐";
    break;
  case 5:
    result = "소";
    break;
}

console.log(`당신은 ${result}띠 입니다.`);

// 5. 삼항 연산자
// 삼항 연산자는 조건에 따른 로직이 단일하거나 짧을 때 사용된다.
// signiture : true ? true data : false data

const age = 20;
const checkAge = age >= 18;
console.log(checkAge);
const adult = checkAge ? "성년입니다." : "미성년입니다.";
console.log(adult);
