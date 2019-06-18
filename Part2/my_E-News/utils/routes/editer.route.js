var express = require('express');

var router = express.Router();

var moment = require('moment');

var articleModel = require('../models/article.model');

var tagModel = require('../models/tag.model');

var auth = require('../middlewares/auth');


var id;
router.post('/data', (req, res) => {
  id = req.body.ArID;
  return res.redirect(`/editer/${req.body.ArID}`);
})


router.post('/approval', (req, res) => {

  var UserID = res.locals.authUser.UserID;
  data = req.body.tags;
  var PostedDay = moment(req.body.PostedDay, 'DD/MM/YYYY').format('YYYY-MM-DD');

  var entity = {
    ArID: id,
    ArStatus: "2",
    Editer: UserID,
    PostedDay: PostedDay,
    category: req.body.category
  }

  console.log(entity);


  articleModel.update(entity).then(n => {
    tagModel.deleteByAr(n).then(n => {
      data.forEach(element => {
        var entity = {
          Tag: element,
          Article: id
        }
        tagModel.add(entity)
      })
    })
    return res.redirect(`/editer/1`);
  })
})

router.post('/deny', (req, res) => {

  if (res.locals.isEditer) 
  { 
  var UserID = res.locals.authUser.UserID;
    var entity = {
      ArID: id,
      ArStatus: "3",
      Editer: UserID,
      Reason: req.body.reason
    }

    articleModel.update(entity).then(n => {
      return res.redirect(`/editer/1`);
    });
  } else { res.render('404', { layout: false }); }
})

router.get('/:id', (req, res) => {
   id = req.params.id || 100;
  if (res.locals.isEditer) {
    Promise.all([
      articleModel.allByState(1),
      articleModel.joinWithCa(id),
      tagModel.allByAr(id),
    ])
      .then(([rows, row, tags]) => {
        res.render('editer/index', {
          articles: rows,
          article: row[0],
          tags: tags
        });
      })
      .catch(err => {
        console.log(err);
        res.end('error occured.')
      });
  } else {
    res.render('404', { layout: false });
  }

  if (isNaN(id)) {
    res.render('editer/index', {
      error: true
    });
  }
})


// router.get('/', (req, res) => {
 
//  if (res.locals.isEditer) {
//      articleModel.allByState(1)
//      .then(rows => {
//        res.render('editer/index', {
//          articles: rows
//        });
//      })
//      .catch(err => {
//        console.log(err);
//        res.end('error occured.')
//      });
//  } else {
//    res.render('404', { layout: false });
//  }
//  if (isNaN(id)) {
//    res.render('editer/index', {
//      error: true
//    });
//  }
// })

module.exports = router;