var Person = {};

Person['age'] = 19;
Person['name'] = '강지민';
Person.moblie = '010-1000-1000';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화번호 : %s', Person['moblie']);