
var express = require('express');
var categoryModel = require('../../models/category.model');

var router = express.Router();

router.get('/',(req,res)=>{
  var p = categoryModel.all();
  p.then(rows => {
    console.log(rows);
    res.render('admin/vwCategories/index', {
      categories: rows
    });
  }).catch(err =>{
    console.log(err);
  });
})

router.get('/add',(req,res)=>{
  var p = categoryModel.all();
  p.then(rows => {
    console.log(rows);
    res.render('admin/vwCategories/add', {
      categories: rows
    });
  }).catch(err =>{
    console.log(err);
  });
 })

 
router.post('/add',(req,res)=>{
    var entity = {
      CaName: req.body.cn,
    }

    categoryModel.add(entity) 
    .then(id =>{
      console.log(id);
      res.render('admin/vwCategories/add');
    })
    .catch(err=>{
      console.log(err);
    })
 })

 router.get('/edit/:id',function (req, res){
  var id = req.params.id;
   if(isNaN(id)){
     res.render('admin/vwCategories/edit',{
       error: true
     });
   }
   categoryModel.single(id).then(rows => {
        if(rows.length > 0){
          res.render('admin/vwCategories/edit', {
            error:false,
            category: rows[0]
          });
        }else{
          res.render('admin/vwCategories/edit', {
            error:true
          });
        }
   }).catch(err =>{
    console.log(err);
    render.end('error occured')
  });
 
  // categoryModel.all().then(rows => {
  //   console.log("cat" + rows);
  //   res.render('admin/vwCategories/edit', {
  //     parents: rows
  //   });
  // }).catch(err =>{
  //   console.log(err);
  // });

 })


 router.post('/update',(req,res)=>{
  var entity = {
    CaId: req.body.CaID,
    CaName: req.body.Caname,
    ParentID: req.body.ParentID
  }
  categoryModel.update(entity) 
  .then(n =>{
   res.redirect('/admin/categories');
  })
  .catch(err=>{
    console.log(err);
  })
  console.log(req.body)
})

router.post('/delete',(req,res)=>{
  console.log(req.body.CaID);
  categoryModel.delete(req.body.CaID) 
  .then(n =>{
   res.redirect('/admin/categories');
  })
  .catch(err=>{
    console.log(err);
  })
  console.log(req.body)
})

module.exports = router;
