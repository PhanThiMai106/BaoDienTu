
var express = require('express');
var tagModel = require('../../models/tag.model');

var router = express.Router();

router.get('/',(req,res)=>{
  var p = tagModel.all();
  p.then(rows => {
    console.log(rows);
    res.render('admin/vwHashTag/index', {
      HashTags: rows
    });
  }).catch(err =>{
    console.log(err);
  });
})


router.get('/add',(req,res)=>{
    var p = tagModel.all();
    p.then(rows => {
      console.log(rows);
      res.render('admin/vwHashTag/add', {
        HashTag: rows
      });
    }).catch(err =>{
      console.log(err);
    });
   })
  
   
  router.post('/add',(req,res)=>{
      var entity = {
        Tag: req.body.Tag,
      }
  
      tagModel.add(entity) 
      .then(id =>{
        console.log(id);
        res.render('admin/vwHashTag/add');
      })
      .catch(err=>{
        console.log(err);
      })
   })
  
   router.get('/edit/:id',function (req, res){
    var id = req.params.id;
     if(isNaN(id)){
       res.render('admin/vwHashTag/edit',{
         error: true
       });
     }
     tagModel.single(id).then(rows => {
          if(rows.length > 0){
            res.render('admin/vwHashTag/edit', {
              error:false,
              HashTag: rows[0]
            });
          }else{
            res.render('admin/vwHashTag/edit', {
              error:true
            });
          }
     }).catch(err =>{
      console.log(err);
      render.end('error occured')
    });
  
   })
  
  
   router.post('/update',(req,res)=>{
    var entity = {
        HashID: req.body.HashID,
      Tag: req.body.Tag,
    }
    tagModel.update(entity) 
    .then(n =>{
     res.redirect('/admin/HashTag');
    })
    .catch(err=>{
      console.log(err);
    })
    console.log(req.body)
  })
  
  router.post('/delete',(req,res)=>{
    tagModel.delete(req.body.HashID) 
    .then(n =>{
     res.redirect('/admin/HashTag');
    })
    .catch(err=>{
      console.log(err);
    })
    console.log(req.body)
  })
  
  module.exports = router;
  