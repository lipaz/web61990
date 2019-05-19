var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 8080;
const path = require('path');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use('/',express.static(path.join(__dirname,'/')));

app.use('/LogIn', function(req,res){
	res.sendFile(path.join(__dirname + '\\LogIn.html'));
});

app.get('\LogIn', function(req, res) {
res.sendFile(path.json( path + '\LogIn.html'));
var user_id = req.param('id');
var user_password = req.param('user_password');

res.send(user_id + ' ' + user_password + ' !');
});

// POST http://localhost:8080/api/users
app.post('/LogIn', function(req, res) {
var user_id = req.body.id;
var user_password = req.body.user_password;
res.send(user_id + ' ' + user_password + ' !');
});
// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
