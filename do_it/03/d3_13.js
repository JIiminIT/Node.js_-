//delete 키워드로 배열 중간 요소 삭제

var Users = [{name : '지민', age :19}, {name : '지성', age :20}, {name: '불닭볶음면' , age :8}];
// console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);

// delete Users[1];
// console.log('delete 키워드로 배열 요소 삭제 후');
// console.log(Users);


//splice()는 배열 요소 여러 개를 한꺼번에 추가하거나 삭제가 가능하다.
//배열명.splice(몇번 index부터 삭제할지, 몇개를 삭제할지);


Users.splice(1,0, {name : '까르보불닭', age: 3});
console.log('splice()로 요소 인덱스 1에 추가한 후');
console.dir(Users);

Users.splice(2,1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');
console.dir(Users);
