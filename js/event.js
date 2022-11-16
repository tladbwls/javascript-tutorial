// 자바스크립트는 front-end 언어이기 때문에 브라우저에서 실행되는 다양한 이벤트를 제어할 수 있는 기능을 제공한다.
// 모든 이벤트는 addEventListener()로 제어할 수 있다. 이를 표준 이벤트 모델이라 한다.
// 첫번째 매개변수에 이벤트 이름을 작성한다.
// 두번째 매개변수에 콜백 함수를 작성하고, 이벤트를 실행했을때 어떠한 기능을 수행할 것인지를 정의한다.

// signiture : DOMname.addEventListener(event name, () => {})

// 1. 콜백 함수의 분리
// - 이벤트를 작성할 때 콜백 함수를 분리하여 작성할 수 있다. : dom.js 클릭하여 사진 바꾸기 참조
// - 이때 기본 함수형과 화살표 함수형에서 받는 this의 결과가 다르다.
// - 화살표 함수의 경우 this는 브라우저의 window객체를 반환한다.
// - 하지만 일반 함수의 경우 this는 클릭한 대상을 리턴한다.

// 2. click event
// - 가장 많이 사용하는 이벤트로 브라우저에 대상을 클릭했을 때 기능을 정의할 수 있다.
// - 클릭한 횟수 출력

//1. DOM요소 선택
const button = document.querySelector(".count-btn");
const numTxt = document.querySelector(".num");

//2. count 초기화
let count = 0;

//3. 클릭 이벤트 작성
button.addEventListener("click", () => {
  //   console.log("click");
  count++;
  numTxt.textContent = count;
});

// 3. keyup event
// - 키보드를 쳤을때 인식하는 이벤트로 keydown, keyup, keypress 등이 있다. 하지만 keydown, keypress 등은 몇 가지 버그가 있어 keyup을 주로 사용한다.
// - 입력값 출력
// 1. DOM 요소 선택
const keyArea = document.querySelector(".key-area");
const keyBtn = document.querySelector(".key-btn");

// 2. 클릭 이후 입력창 텍스트 저장

keyBtn.addEventListener("click", () => {
  const txtContent = document.querySelector("input").value;
  if (txtContent === "") {
    alert("글자를 입력해주세요");
    return; //코드 블럭 실행 끝남
  }
  alert(txtContent);
});
// 4. enter 키보드 눌렀을 때 동작 등록
const keyPress = (event) => {
  //   console.log(event);
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    keyBtn.click();
  }
};

keyArea.addEventListener("keyup", keyPress);
//키코드 넘버 참조 http://superkts.pe.kr/upload/helper/file1/keyCode.html

// 4. scroll event
// - 마우스를 스크롤할때 발생하는 이벤트로 주로 화면 위치를 파악하여 특정 기능을 실행 시키는데 사용한다.
// - 화면 맨위로 버튼 기능

//1. DOM 요소 선택
const scrollBtn = document.querySelector(".toTop");

//2. scroll event 등록
window.addEventListener("scroll", () => {
  scrY = window.scrollY;
  //   console.log(scrY);
  if (scrY > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  //scrolTo (x좌표,y좌표)
  // window.scrollTo(0, 0);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// 5. mousemove event
// - sarah 참조
