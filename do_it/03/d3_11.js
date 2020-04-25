//배열 끝에 있는 요소 추가, 삭제

var Users = [{name : '지민', age : 19}, {name : '지성', age :20}];
console.log('push() 호출 전 배열 요소의 수 : %d',Users.length);

Users.push({name :'불닭볶음면', age : 8});
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열 요소의 수 : %d',Users.length);