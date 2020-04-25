//배열 앞에 있는 요소 추가, 삭제

var Users = [{nmae : '지민', age :18}, {name :'지성', age :20}];
console.log('unshift() 호출 전 배열 요소의 수 : %d',Users.length);

Users.unshift({name : '불닭볶음면', age: 8});
console.log('unshift() 호출 후 배열 요소의 수 : %d',Users.length);

Users.shift();
console.log('shift() 호출 후 배열 요소의 수: %d', Users.length)