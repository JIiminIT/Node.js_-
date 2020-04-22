//모듈이란? : '별도의 파일로 분리된 독립 기능의 모음'이라서 모듈을 만들어 놓으면 다른 파일에서 모듈을 불러와 사용할 수 있습니다.

var calc = {};
calc.add = function(a,b){
    return a + b;
}

console.log('모듈로 분리하기 전 - calc.add 함수 호출 결과 : %d', calc.add(10,10));


