
var express = require('express');
var accountModel = require('../../models/account.model');

var router = express.Router();

router.get('/:id',(req,res)=>{
  var id = 1;
  if(isNaN(id)){
    res.render('admin/vwAccount/adminAccount',{
      error: true
    });
  }
  accountModel.single(id).then(rows => {
       if(rows.length > 0){
         res.render('admin/vwAccount/adminAccount', {
           error:false,
           User: rows[0]
         });
       }else{
         res.render('admin/vwAccount/adminAccount', {
           error:true
         });
       }
  }).catch(err =>{
   console.log(err);
   render.end('error occured')
 });
  })

  // router.get('/edit',(req,res)=>{
  //  var p = accountModel.all();
  //  p.then(rows => {
  //    console.log(rows);
  //    res.render('admin/vwAccount/editAccount', {
  //      User: rows[0]
  //    });
  //  }).catch(err =>{
  //    console.log(err);
  //  });
  // })

 router.get('/:id/edit',function (req, res){
  var id = 1;
   if(isNaN(id)){
     res.render('admin/vwAccount/editAccount',{
       error: true
     });
   }
   accountModel.single(id).then(rows => {
        if(rows.length > 0){
          res.render('admin/vwAccount/editAccount', {
            error:false,
            User: rows[0]
          });
        }else{
          res.render('admin/vwAccount/editAccount', {
            error:true
          });
        }
   }).catch(err =>{
    console.log(err);
    render.end('error occured')
  });
})


router.post('/update',(req,res)=>{
  console.log(req.body);
  var entity = {
    UserID: req.body.UserID,
    Detail: req.body.Detail,
    FullName: req.body.FullName,
    UserName: req.body.UserName,
    Gender: req.body.Gender,
    Email: req.body.Email,
    PhoneNumber: req.body.PhoneNumber,
    Address: req.body.Address,
    DayOfBirth: req.body.DayOfBirth,
  }
  accountModel.update(entity) 
  .then(n =>{
   res.redirect('/admin/MyAccount/'+ req.body.UserID);
  })
  .catch(err=>{
    console.log(err);
  })
})

  module.exports = router;