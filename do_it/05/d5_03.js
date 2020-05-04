//import { restart } from "nodemon";

// 클라이언트 요청 이벤트 처리
server.on('request', function(req, res){
    console.log('클라이언트 요청이 들어왔습니다.');
    
    res.writeHead(200,{"Content=Type": "text/html' charser = utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write(" <head>");
    res.write("     <title>응답 페이지</title>");
    res.write(" </head>");
    res.write(" <body>");
    res.write("     <h1>node.js로부터의 응답 페이지</h1>");
    res.write(" </body>");
    res.write("</html>");
    res.end();
});