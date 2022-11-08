// alert("abc");

// const divEl = document.querySelector("div");
// console.log(divEl);
//디버깅 창의 콘솔 탭에 표시되는 데이터
// 작성한 데이터가 브라우저에 어떻게 표시 되는지를 확인하는 용도로 쓰인다.
// console.log("test");

// 1. var 변수 선언과 호이스팅
// - 2015년 후에 const와 let 으로 대체된 변수 선언 키워드
// - 호이스팅은 변수가 선언되는 순간 해당 데이터가 가장 위에서 선언된 것으로 간주하는 특징을 말한다.
var varVar = "Variable";
console.log(varVar);
// 2. 변수
// -임의로 만든 식별자에 특정 데이터를 저장하는 것을 말한다.
// -변수가 선언되면 자바스크립트 엔진은 특정공간을 만들고 데이터를 참조한다.

// 3. const 상수 선언
// - 상수는 항상 같은 수로 한 번 이름이 정해지면 바꿀 수 없다.
// 상수는 한 번만 저장되기 때문에 별도의 공간을 할당하지 않아 효율적이다.
// 따라서 대부분 값의 할당은 상수로 선언된다.
const a = "const variable";
console.log(a);
// a = "again const"; //error
// const a = "again again const"; //error

let c;
c = 3;
console.log(c);

// 4. let 변수 선언
// - 변할 수 있는 값으로 런타임으로 값의 변경이 가능하다.
// - let으로 선언된 변수는 값의 변경은 가능하지만 선언을 다시 할 수는 없다.
let letVar = "let variable";
console.log(letVar);

letVar = "again let variable";
console.log(letVar);

// let letVar = "again let variable again";
