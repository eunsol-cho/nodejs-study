// sample-package 를 불러오면 실행하는 파일
console.log("require로 부르면 실행됩니다.");

// 외부로 노출할 객체
module.exports = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  multi: (a, b) => a * b,
  div: (a, b) => a / b,
};
