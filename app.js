/* main file*/
var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/',function(req, res){
    res.send('Hello home page');
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


