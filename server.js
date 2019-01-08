var express    = require('express')      // call express
var bodyParser = require('body-parser')
var app        = express()     // define our app using express
var mongoose = require('mongoose');var db;

mongoose.connect('mongodb://henry:dog123@ds147723.mlab.com:47723/homework')

// configure app to use bodyParser() and ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');


app.get('/', function(req, res) {

console.log("GETTING /")

  res.render('index.ejs')
})


//start server
var port     = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('arf')
})
