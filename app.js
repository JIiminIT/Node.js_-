/* main file*/
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/',function(req, res){
    res.send('<h1>Hello home page</h1>');
});

app.get('/dynamic', function(req,res){
    var lis ='';
    for(var i=0;i<5; i++)
{
    lis = lis + '<li>coding</li>';
}  
  var ouput = `<h1>html file</h1>  
  ${lis} `;
    res.send(ouput);
});

app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});

app.listen(3000, function(){
    console.log('Conneted 3000 port!');
});


// db((err, conn) => {
//     if(err) throw err;
//     let sql = "insert into Board set ?;"
//     conn.query(sql, board, (err, results) => {
//       if(err) throw err;
//       res.send(results);
//     })
//   })
// });