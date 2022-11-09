// 프로그래밍 언어에서 다루는 모든 데이터는 각자의 형태를 지닌다. 이를 타입이라 한다.
// 원시 타입 : srting, number, boolean, undefined, null
// 객체 차입 : function, array, object

// 1. 문자열 (string)
// ''안에 작성되는 원시 값은 문자로 인식되고 이들의 나열이 문자열이다.
const string = "hello world";
console.log(string);

// 문자는 홀따옴표와 겹따옴표 어떤 것을 사용해도 되나, 따옴표 안에 다른 따옴표가 들어간다면 홀과 겹을 다르게 사용해야 한다.
const string1 = "i'm marshall";
console.log(string1);

// type을 체크할 때는 typeof() 메서드를 사용한다.
console.log(typeof string1);

// 2. 탬플릿 리터럴
//  - 변수와 문자열을 함께 사용할 때 es6 버전 부터는 + 기호 없이 편리하게 조합할 수 있는 방식을 제공한다. 이를 템플릿 리터럴이라 한다.
// -전체 문자열을 백틱으로 감사고, 변수 부분을 ${} 안에 작성한다.

const class1 = "header";
const tag = `<div class = '${class1}'></div>`;
console.log(tag);

// 3. 숫자(number)
// 숫자는 따옴표 없이 사용하며, 말 그대로 숫자를 사용한다. 숫자 형태이므로 연산이 가능하다.
// 자바스크립트는 엔진이 타입을 추론하므로 별도의 선언문 없이 숫자, 문자, 객체 등의 타입을 지정할 수 있다.
// 따라서 소수를 작성해도 숫자 타입으로 지정된다.

const a = 0.5;
const b = 1;
console.log(a);
console.log(b);

// 숫자를 작성할 때 따옴표 안에 작성하면 문자열로 변형된다.
// 숫자형 문자를 숫자형으로 변경할때 Number() 메서드를 사용한다. 이와 같이 변경하는 것을 명시적 형변환이라 한다.

const c = "5";
console.log(c);
// console.log(typeof c);
// console.log(typeof Number(c));

// 숫자형 문자는 + 의 경우 문자 연산이 되지만 나머지 연산은 엔진이 숫자로 임의 변경하여 연산한다. 이를 암묵적 형변환이라 한다.
// 암묵적 형변환된 데이터는 숫자형으로 변경된다.

const d = "7";
console.log(c + d);
console.log(d - c);
console.log(typeof (d - c));

// 4. NaN
// 자바스크립트 엔진이 숫자형으로 인식하는 것 중에 특이한 것은 NaN이다. 이는 Not a Number의 이니셜로 '숫자가 아님'이지만 숫자다.

const e = "marshall" * 30;
console.log(e);
console.log(typeof e);

// 5. Boolean (분개(비교)할 때)
// 컴퓨터는 모든 데이터를 0과 1로 읽는다. 이를 이용하여 true와 false를 나타내는 방식을 표현하는데 이를 boolean이라 한다.
// George Boole이라는 수학자가 고안해서 붙여진 이름이다.
// 직접적으로 true와 false를 사용하는 경우도 있지만 대부분 한 로직이 여러가지 경우의 수에 따라 흐름을 달리할 때 사용한다.(로그인 했을때와 아닐때 등)

const f = true;
console.log(typeof f);

// const yourAge = prompt();

// if (yourAge >= 18) {
//   document.write("당신은 성년 입니다.");
//   document.write(yourAge >= 18);
// } else {
//   document.write("당신은 미성년입니다.");
// }

// 프로그래밍 언어
// 1. 분개: true인지 false인지 구분
// 2. 반복
// 3. 함수

// 6. undefined
// undefined 는 원시값(Primitive Type)으로, 선언한 후에 값을 할당하지 않은 변수나 값이 주어지지 않은 인수에 자동으로 할당된다.

let g;
console.log(g);

// undefined는 false, 0, 빈값과는 다르다.

console.log(undefined == false);
console.log(undefined == 0);
console.log(undefined == "");

// 7. null
// 값을 의도적으로 비울 때 null을 대입한다.
// undefined와 같이 빈어있는 값이라는 의미는 간다.

console.log(undefined == null);
// 값은 같지만

// 하지만 데이터의 타입은 undefined와 다르다.

console.log(undefined === null);
// 타입은 다르다

// null 역시 false, 0, 빈값과는 다르다.
