
var express = require('express');
var userModel = require('../../models/user.model');

var router = express.Router();

router.get('/',(req,res)=>{
  var p = userModel.all();
  p.then(rows => {
    console.log(rows);
    res.render('admin/vwUsers/index', {
      Users: rows
    });
  }).catch(err =>{
    console.log(err);
  });
})


router.get('/edit/:id',function (req, res){
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
   })


module.exports = router;
