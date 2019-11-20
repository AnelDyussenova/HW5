const express= require('express');
const app= express();
const path= require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
 extended: true
}));

app.set('view engine', 'ejs');

app.set('views',path.join(__dirname,'views'));
app.use(express.static(__dirname + '/public'));

// var mysql = require('mysql');
// var bcrypt = require('bcrypt-nodejs');
// var dbconfig = require('./config/database');
// var connection = mysql.createConnection(dbconfig.connection);

// connection.query('USE ' + dbconfig.database);

app.get('/',(req,res)=>{
	res.render('index1.ejs',{name:'Hiii!'});
});
app.post('/homework',(req,res, done)=>{
	// connection.query("INSERT INTO hw (name, surname) values (?, ?)", [req.body.name,req.body.surname] ,
	//    function(err, rows){
	//     done(err, rows[0]);
	// });
	res.render('index2.ejs',{name:req.body.name, surname: req.body.surname});
});

app.listen(3000);

console.log('sever zkfgnkjng');
