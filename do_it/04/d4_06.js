// 파일 읽기 ~ 쓰기 기능은 fs 모듈
var fs = require('fs');

// 파일을 비동기식 10로 읽어 들입니다.
fs.readFile('./package.json', 'utf8',function(err, data){  // package.json이 밖에 있어서 실행이 안 될것임.
    //읽어 들인 데어터를 출력합니다.
    console.log(data); 
});

console.log('프로젝트 폴더 안의 package.json 파일을 읽도록 요청했습니다.');
