var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var fs = require('fs');
// var secret = require('./secret');
 
 var app = express()
// App shit
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

// Model because one file apps are the vogue

console.log(process.env.DB);

mongoose.connect(process.env.DB);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Please. Error make sure that MongoDB is running.');
});

var store = new mongoose.Schema({
	ip: String
})



// Routes
app.post('/api', function(req, res) {
	var ip = req.body.ip;
	console.log(ip)
	res.json({ message: ip})
})

app.get('/', function(req, res) {
    res.json({ message: 'eff off' });   
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});