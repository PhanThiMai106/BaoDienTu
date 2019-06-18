
var express = require('express');
var userModel = require('../../models/user.model');

var router = express.Router();

// router.get('/',(req,res)=>{
//   var p = userModel.all();
//   p.then(rows => {
//     console.log(rows);
//     res.render('admin/vwUsers/index', {
//       Users: rows
//     });
//   }).catch(err =>{
//     console.log(err);
//   });
// })




router.get('/',(req,res,next)=>{

  if(res.locals.kind == "admin"){

    var page = req.query.page || 1;
    if (page < 1) page = 1;
  
    var limit = 8;
    var offset = (page - 1) * limit;
  
    Promise.all([
      userModel.allWithLimit(limit, offset),
      userModel.count(),
    ]).then(([rows, count_rows])=> {
        var total = count_rows[0].total;
      var nPages = Math.floor(total / limit);
      if (total % limit > 0) nPages++;
      var pages = [];
      for (i = 1; i <= nPages; i++) {
        var obj = { value: i, active: i === +page };
        pages.push(obj);
      }
      res.render('admin/vwUsers/index', {
        Users: rows,
        pages
      });
    }).catch(next);
   
  }else{res.render('404', { layout: false });}
 
})

router.get('/Subcribers',(req,res)=>{
  if(res.locals.kind == "admin"){
    userModel.allByKind("subcriber")
    .then(rows => {
      console.log(rows);
      res.render('admin/vwUsers/index', {
        Users: rows
      });
    }).catch(err =>{
      console.log(err);
    });
  }else{res.render('404', { layout: false });}
})

router.get('/Writers',(req,res)=>{
  if(res.locals.kind == "admin"){
    userModel.allByKind("writer")
.then(rows => {
 console.log(rows);
 res.render('admin/vwUsers/index', {
   Users: rows
 });
}).catch(err =>{
 console.log(err);
});}else{res.render('404', { layout: false });}
})

router.get('/Editers',(req,res)=>{
  if(res.locals.kind == "admin"){
   
 userModel.allByKind("editer")
 .then(rows => {
  console.log(rows);
  res.render('admin/vwUsers/index', {
    Users: rows
  });
 }).catch(err =>{
  console.log(err);
 });
  }else{res.render('404', { layout: false });}
 

})

router.get('/edit/:id',function (req, res){
  if(res.locals.kind == "admin"){
    var id = req.params.id;
    if(isNaN(id)){
      res.render('admin/vwUsers/edit',{
        error: true
      });
    }
    userModel.single(id).then(rows => {
         if(rows.length > 0){
           res.render('admin/vwUsers/edit', {
             error:false,
             User: rows[0]
           });
         }else{
           res.render('admin/vwUsers/edit', {
             error:true
           });
         }
    }).catch(err =>{
     console.log(err);
     render.end('error occured')
   });
  }else{res.render('404', { layout: false });}
   })


   router.get('/add',(req,res)=>{
    if(res.locals.kind == "admin"){
      var p = userModel.all();
  
      res.render('admin/vwUsers/add');
    }else{res.render('404', { layout: false });}
   
 
   })
  


   ///
router.post('/add',(req,res)=>{
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
    avata: req.body.avata
  }
  
  

  res.render('admin/users/add');
 userModel.add(entity) 
  .then(id =>{
    res.render('admin/users');
  })

  .catch(err=>{
    console.log(err);
  })
})

router.post('/delete',(req,res)=>{
  console.log(req.body.UserID);
  userModel.delete(req.body.UserID) 
  .then(n =>{
   res.redirect('/admin/users');
  })
  .catch(err=>{
    console.log(err);
  })
  console.log(req.body)
})

module.exports = router;
