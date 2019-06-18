var express = require('express');

var router = express.Router();

var articleModel = require('../models/article.model');


  
router.get('/', (req, res) => {
    if(res.locals.isEditer){
        articleModel.allByState(1)
      .then(rows => {
        console.log("cc" + rows);
        res.render('editer/index', {
          articles: rows
        });
       
      }).catch(err => {
        console.log(err);
        res.end('error occured.')
      });  
    }else{res.render('404', { layout: false });}

  
  })
  

 
module.exports = router;