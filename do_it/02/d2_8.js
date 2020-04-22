// 미리 포함되어 있는 모듈을 '내장 모듈' 이라고 한다. 

var os = require('os');

console.log('시스템의 hstname : %s', os.hostname());
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());  // 사용 가능한 메모리, 전체 메모리
console.log('시스템의 CPU 정보 \n');
console.log(os.cpus());
console.log('시스템의 네트워크 인터페이스 정보 \n');
console.dir(os.networkInterfaces());