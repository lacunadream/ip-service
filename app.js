var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var fs = require('fs');
// var secret = require('./secret');
 
 var app = express();
// App shit
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

// Model because one file apps are the vogue

// console.log(process.env.DB);

mongoose.connect(process.env.DB);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Please. Error make sure that MongoDB is running.');
});

var ipSchema = new mongoose.Schema({
	ip: String, 
	date: { type : Date, default: Date.now }
});

var Store = mongoose.model('Store', ipSchema);

// Routes
app.post('/api', function(req, res) {
	var machineIP = req.body.ip;
	console.log(machineIP)
	res.json({ message: machineIP})

	var store = new Store({
		ip : machineIP
	}) 

	store.save(function(err) {
		if (err) return (err);
	})
})

app.get('/api', function(req, res){
	Store
		.findOne()
		.sort('-date')
		.exec(function(err,latest) {
			if (err) return (err)
			res.json(latest.ip)
		})
})

// Directly outputs the link

app.get('/link', function(req, res){
	Store
		.findOne()
		.sort('-date')
		.exec(function(err,latest) {
			if (err) return (err)
			res.send("<a href='http://" + latest.ip + "'>http://" + latest.ip + "</a>")
		})
})

app.get('/', function(req, res) {
    res.json({ message: 'eff off' });   
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});