// 객체 속성으로 함수를 할당하기.

var Person = {};

Person['age'] = 19;
Person['name'] = '강지민';

Person.add = function(a,b){
    return a + b;
};

console.log('더하기 (10,10) : %d', Person.add(10,10));