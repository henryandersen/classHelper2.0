
module.exports = function(app, passport) {
    var Need = require('./models/need')
    var User = require('./models/user')
    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
      Need.find({}, function(err, needs) {
      if (err) throw err;

      // object of the user
      console.log(needs);
      res.render("index.ejs", {needs: needs})

    });

    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    // process the login form
    app.post('/login', passport.authenticate('local-login', {failureRedirect : '/signup',
    failureFlash : true }), function(req,res){
    console.log(req.user.local.email)
    if(req.user.local.email == "henryandersen7@gmail.com" || req.user.local.email == "Mr.Rowland@gmail.com"){
      res.redirect('/tProfile')
    }else{
      res.redirect('/profile')
    }
    });

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
      Need.find({}, function(err, needs) {
      if (err) throw err;

      // object of the user
      console.log(needs);
      res.render("profile.ejs", {needs: needs,
          user : req.user // get the user out of session and pass to template
      })

      });

    });

    app.post('/delete', (req,res) => {
      var id = parseInt(req.body.buttonId);
      console.log(id);
      Need.findByIdAndRemove(req.body.buttonId, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",

          };
          console.log(response);
        });
        res.redirect("/profile")
    });
    app.post('/tDelete1', (req,res) => {
      var id = parseInt(req.body.buttonId);
      console.log(id);
      Need.findByIdAndRemove(req.body.buttonId, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",

          };
          console.log(response);
        });
        res.redirect("/tProfile")
    });
    app.post('/tDelete2', (req,res) => {
      var id = parseInt(req.body.buttonId);
      console.log(id);
      Need.findByIdAndRemove(req.body.buttonId, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const response = {
            message: "Todo successfully deleted",

          };
          console.log(response);
        });
        res.redirect("/tProfile5")
    });
    app.get('/tProfile', isLoggedIn, function(req, res) {
      Need.find({}, function(err, needs) {
      if (err) throw err;

      // object of the user
      console.log(needs);
      res.render("teacherProfile.ejs", {needs: needs,
          user : req.user // get the user out of session and pass to template
      })

      });

    });
    app.get('/tProfile5', isLoggedIn, function(req, res) {
      Need.find({}, function(err, needs) {
      if (err) throw err;

      // object of the user
      console.log(needs);
      res.render("teacherProfile2.ejs", {needs: needs,
          user : req.user // get the user out of session and pass to template
      })

      });

    });
    app.post('/question', (req, res) => {

    var newRequest = new Need({need: req.body.need, email: req.body.email, comments: req.body.comments, urgency: req.body.urgency });
    newRequest.save(function(err){
      console.log("saved" + newRequest.need)
      console.log(req.body.email)
      Need.find({}, function(err, needs) {
      if (err) throw err;

      // object of the user
      console.log(needs);
      console.log(req.body.need);
      res.redirect("/profile")

      });
    })


    })


    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/profile');
}
