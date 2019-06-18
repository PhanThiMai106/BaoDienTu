var express = require('express');
var articleModel = require('../models/article.model');

var router = express.Router();

router.get('/:id/Articles', (req, res, next) => {
  var id = req.params.id;
  var page = req.query.page || 1;
  if (page < 1) page = 1;

  var limit = 6;
  var offset = (page - 1) * limit;


  Promise.all([
   articleModel.pageByCa(id, limit, offset),
    articleModel.countByCa(id),
  ]).then(([rows, count_rows]) => {
    for (const c of res.locals.allLcCategories) {
      if (c.CaID === +id) {
        c.isActive = true;
      }
    }

    var total = count_rows[0].total;
    var nPages = Math.floor(total / limit);
    if (total % limit > 0) nPages++;
    var pages = [];
    for (i = 1; i <= nPages; i++) {
      var obj = { value: i, active: i === +page };
      pages.push(obj);
    }

    res.render('vwarticles/byCa', {
      Articles: rows,
      pages
    });
  }).catch(next);
})

module.exports = router;


// var express = require('express');
// var ArticleModel = require('../models/article.model');

// var router = express.Router();

// router.get('/:id/Articles',(req,res)=>{
//     var id = req.params.id;
//     if(isNaN(id)){
//       res.render('vwarticles/byCa',{
//         error: true
//       });
//     }
//  ArticleModel.allByCa(id)
//   .then(rows => {
//     console.log(rows);
//     res.render('vwarticles/byCa', {
//       Articles: rows
//     });
//   }).catch(err =>{
//     console.log(err);
//   });
// })

// router.get('/Articles',(req,res)=>{
 
// ArticleModel.all()
// .then(rows => {
//   console.log(rows);
//   res.render('vwarticles/byCa', {
//     Articles: rows
//   });
// }).catch(err =>{
//   console.log(err);
// });
// })

// module.exports = router;
