var express    = require('express')      // call express
var bodyParser = require('body-parser')
var app  = express()     // define our app using express
var mongoose = require('mongoose');
var db;
var cookieParser = require('cookie-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var session      = require('express-session');


mongoose.connect('mongodb://phildierks:4phillip@ds049538.mlab.com:49538/classhelper')

// configure app to use bodyParser() and ejs
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
// load our routes and pass in our app and fully configured passport
require('./app/routes.js')(app, passport);
require('./config/passport')(passport); // pass passport for configuration



app.get('/', function(req, res) {
console.log("GETTING /")
  res.render('index.ejs')
})


//start server
var port  = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('arf')
})
