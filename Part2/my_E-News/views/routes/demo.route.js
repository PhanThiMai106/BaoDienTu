var express = require('express');

var router = express.Router();

var articleModel = require('../models/article.model');

var tagModel = require('../models/tag.model');

// ben nay` neu t tao 1 link thi duong link la gi tag

// router.post('/demo',(req,res)=>{
//     var data= req.body;
//     var id = req.body.id;
//     var arr = req.body.arr
//     // muon tra ve list ben nay thi tao 1 arr xong res.end no ra th.
//     var arr= [];
//     // khi ba chay hashtag thi tao 1 model de lay hashtag ra la dc
//     arr[0]= "1";
//     arr[1]= "2";
//     console.log(req.body.tag);
//     console.log(req.body.arr);
//     res.end(""+arr);
// })


// router.get('/editor', (req, res, next) => {
//   res.render('vwDemo/editor');
// })

// router.post('/editor',(req, res, next) =>{

//   res.render('vwDemo/editor');
// })

router.get('/', (req, res, next) => {

  var page = req.query.page || 1;
  if (page < 1) page = 1;

  var limit = 6;
  var offset = (page - 1) * limit;


  Promise.all([
    articleModel.allWithLimit(limit, offset),
    articleModel.count(),
  ]).then(([rows, count_rows]) => {
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


router.get('/upload', (req, res) => {
  if (res.locals.kind == "writer") {
    res.render('vwDemo/upload');
  } else { res.render('404', { layout: false }); }
})

var data;
router.post('/tags', (req, res, next) => {

  data = req.body.tags;

  console.log("tags " + data);
})

router.post('/upload', (req, res, next) => {
  // console.log(req.body);
  // console.log(req.body.tag);
  // console.log("tile" + req.body.Title);
  // console.log("tile" + req.body.Summary);
  // console.log("tile" + req.body.FullDes);
  // console.log("tile" + req.body.fuMain);
  console.log("tile" + req.body.category);


  var entity = {
    ArTitle: req.body.Title,
    Summary: req.body.Summary,
    Content: req.body.FullDes,
    Photo: req.body.fuMain,
    category: req.body.category,
    ArStatus: "1",
  };

  var ArId;
  articleModel.add(entity)
    .then(id => {
      ArId = id;
      data.forEach(element => {
        var entity = {
          Tag: element,
          Article: id,
        }
        tagModel.add(entity)
          .then(id => {
            console.log(id);
            res.redirect('/demo/' + ArId + '/preview')
          })
          .catch(err => {
            console.log(err);
          })
      });
      // res.redirect('/demo/' + id + '/preview')
    })
    .catch(err => {
      console.log(err);
    })

  //  console.log("data" + data);
  //  console.log("jkla Arid "+ ArId)
  //  data.forEach(element => {
  //  var entity = {
  //   Tag: element,
  //   Article: ArId,
  // }

  // console.log("Arid "+ ArId)
  // tagModel.add(entity) 
  // .then(id =>{
  //   console.log(id);
  //   res.redirect('/demo/' + ArId + '/preview')
  // })
  // .catch(err=>{
  //   console.log(err);
  // })
  //  });
})





router.get('/:id/preview', (req, res, next) => {
  var id = req.params.id;

  if (isNaN(id)) {
    res.render('vwDemo/preview', {
      error: true
    });
  }
  articleModel.single(id).then(rows => {
    if (rows.length > 0) {
      res.render('vwDemo/preview', {
        error: false,
        article: rows[0]
      });
    } else {
      res.render('vwDemo/preview', {
        error: true
      });
    }
  }).catch(err => {
    console.log(err);
    render.end('error occured')
  });

})



module.exports = router;


