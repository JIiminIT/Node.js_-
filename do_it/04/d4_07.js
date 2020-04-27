
var fs = require('fs');

// 파일 데이터를 씁니다.
fs.writeFile('./output.txt','Hello World', function(){
    if(err){
        console.log('Error : ' + err);
        
    }

    console.log('output.txt 파일에 데이터 쓰기 완료.');
    
});