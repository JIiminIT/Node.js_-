// join() : 여러 개의 이름들을 모두 합쳐 하나의 파일 패스로 만들어 줍니다.
// 파일 패스를 완성할 때 구분자 등을 알아서 조정합니다.

var path = require('path');

// 디렉터리 이름 합치기
var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉터리 : %s', docsDirectory);


//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/User/mike', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

//패스에서 디렉터리, 파일 이름, 확장자 구별하기
var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);    // 디렉터리 이름을 반환
var basename = path.basename(filename);  //파일의 확장자를 제외한 이름 반환
var extname = path.extname(filename);    // 파일의 확장자를 반환

console.log('디렉터리 : %s , 파일 이름 : %s, 확장자 : %s', dirname. basename, extname);