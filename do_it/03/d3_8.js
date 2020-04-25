//객체 생성 : {}, 배열 생성 []

var Users = [{name : '강지민', age : 19,} , {nmae : '강지성', age : 20}];

Users.push({name : '불닭볶음면', age : 8});

console.log('사용자 수 : %d', Users.length);
console.log('첫 번째 사용자 이름 : %s', Users[0].name);