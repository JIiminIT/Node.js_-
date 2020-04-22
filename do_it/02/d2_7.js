// 다른 사람이 만들어 둔 모듈을 '외장 모듈'이라고 한다.
// 환경 변수에 접근할 수 있는 모듈의 이름 'nconf'          (process.env)

var nconf = require('nconf');
nconf.env();

console.log('OS 환경 변수의 값 : %s', nconf.get('OS'));