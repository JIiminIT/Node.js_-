var Users = [{name : '강지민', age : 19}, {name : '강지성', age :20}, {name : '불닭볶음면' , age :8}];

console.log('배열 요소의 수 : %d', Users.length);

for(var i =0; i < Users.length; i++){
    console.log('배열 요소 #' + i + ' : %s' ,Users[i].name);
}

console.log('\nforEach 구문 사용하기');

Users.forEach(function(item, index){
    console.log('배열 요소 #' + index + ' :%s', item.name);
});