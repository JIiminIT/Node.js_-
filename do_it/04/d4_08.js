
var fs = require('fs');

//파일 데이터를 씁니다.
fs.open('./output.txt', 'w', function(err, fd){
    if(err) throw err;

    var buf = new Buffer('비빔면\n');
    fs.write(fd, buf, 0, buf.lengthq, null, function(err, written, buffer){
        if(err) throw err;

            console.log(err, written, buffer);
            
        fs.close(fd,function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료.');
            
        });
    });
});