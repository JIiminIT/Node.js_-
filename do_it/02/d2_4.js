//process.env 속성을 통해 사용자 정의 환경 변수뿐만 아니라 OS와 같은 시스템 환경 변수도 접근할 수 있다.
console.log(process.env);
console.log('OS 환결 변수의 값 :' + process.env['OS']);