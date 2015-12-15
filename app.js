var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var fs = require('fs');
 
 var app = express()
// App shit
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));

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