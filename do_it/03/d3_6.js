
var Person = {};

Person['age'] = 19;
Person['name'] = '강지민';

var oper = function(a,b){
    return a + b;
};

Person['add'] = oper;

console.log('더하기 (10,10) : %d', Person.add(10,10));