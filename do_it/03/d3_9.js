//배열에 함수 추가하기

var Users = [{name : '강지민' , age : 19}, {name : '강지성' , age : 20 }];

var add = function(a,b){
    return a + b;
}

Users.push(add);

console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));