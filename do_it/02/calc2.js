//module.exports로 메인 파일에 더하기 함수 호출하기

var calc = {};

calc.add = function(a, b){
    return a + b;
};

module.exports = calc;