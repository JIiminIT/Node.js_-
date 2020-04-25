//slice() : 배열의 일부 요소들을 복사하여 새로운 배열을 만든다.
//배열명.slice(복사 요소 시작 index, 끝 위치);

var Users = [{name : '지민', age :19}, {name : '지성', age :20}, {name: '불닭볶음면' , age :8}, {name: '까르보불닭', age:3}];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2 = Users.slice(1,4);

console.log('slice()로 잘라낸 후 Users2');
console.dir(Users2);

var Users3 = Users2.slice(1);

console.log('slice()로 잘라낸 후 Users3');
console.dir(Users3);
