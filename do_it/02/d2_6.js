// calc.js파일을 모듈로 불러오기 위해 require()함수를 호출한다.


var calc = require('./calc');  //    ./ : 파일 이름은 상대 패스로 지정함.
console.log('모듈을 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10,10));


var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10,10));