var result = 0;

console.time('duration_sum'); //time(id) 실행 시간을 측정하기 위한 시작 시간을 기록합니다.

for(var i = 1; i<= 1000; i++){
    result += i;
}

console.timelineEnd('duration_sum'); //실행 시간을 측정하기 위한 끝 시간을 기록합니다.
console.log('1부터 100가지 더한 결과물 : %d', result);

console.log('현재 실행한 파일의 이름 :%s', __filename);
console.log('현재 실행한 파일의 패스 : %s', __dirname);


