

// var express = require('express');
// var bcrypt = require('bcrypt');
// var moment = require('moment');
// var userModle = require('../models/user.model');

// var router = express.Router();

//


var express = require('express');
var bcrypt = require('bcrypt');
var moment = require('moment');
var passport = require('passport');
var userModel = require('../models/user.model');
var auth = require('../middlewares/auth');

var router = express.Router();

router.get('/is-available', (req, res, next) => {
  var user = req.query.UserName;
  userModel.singleByUserName(user).then(rows => {
    if (rows.length > 0) {
      return res.json(false);
    }

    return res.json(true);
  })
})


router.get('/register',(req,res, next)=>{
 
    res.render('vwAccount/register');
   });
router.post('/register',(req,res, next)=>{
  var saltRounds = 10;
  var hash = bcrypt.hashSync(req.body.password,saltRounds);
  var dob = moment(req.body.DayOfBirth , 'DD/MM/YYYY').format('YYYY-MM-DD');
  var CreatedDay =   moment(Date.now() , 'DD/MM/YYYY').format('YYYY-MM-DD');
  console.log(" 1 " + CreatedDay);
  console.log( " 2 " + Date.now())
  console.log("3 " + Date.now() + 7)
  var ExpriredDay =   moment(Date.now() + 7 , 'DD/MM/YYYY').format('YYYY-MM-DD');
  
  var entity = {
    UserID: req.body.UserID,
    Detail: req.body.Detail,
    FullName: req.body.FullName,
    UserName: req.body.UserName,
    Gender: req.body.Gender,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Address: req.body.Address,
    DayOfBirth: dob,
    Avata: req.body.Avata,
    UserPassword: hash,
    Kind: "Subcriber",
    CreatedDay: CreatedDay,
    ExpriredDay: ExpriredDay
   };
 userModel.add(entity) 
    .then(id =>{
     res.redirect('/account/login/');
    })
    .catch(err=>{
      console.log(err);
    })
});



router.get('/login', (req, res, next) => {
  res.render('vwAccount/login', { layout: false });
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err)
      return next(err);

    if (!user) {
      return res.render('vwAccount/login', {
        layout: false,
        err_message: info.message
      })
    }
   
    req.logIn(user, err => {
      if (err)
        return next(err);
      return res.redirect('/');
    });
  })(req, res, next);
})

router.get('/profile', auth, (req, res, next) => {
   
  res.render('vwAccount/profile');
})

router.get('/profile/edit', auth, (req, res, next) => {
  res.render('vwAccount/edit');
})

router.post('/logout', auth, (req, res, next) => {
  req.logOut();
  res.redirect('/account/login');
})

module.exports = router;
