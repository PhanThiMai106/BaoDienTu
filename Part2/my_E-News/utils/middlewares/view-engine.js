var exphbs = require('express-handlebars');
var hbs_sections = require('express-handlebars-sections');
var numeral = require('numeral');

module.exports = function (app) {
  app.engine('handlebars', exphbs({
    layoutsDir: 'views/layouts',
    defaultLayout:'main.handlebars',
    helpers:{
      format: val => {
        return numeral(val).format('0,0');
      },
  
      section: hbs_sections()
    }
  }));
  app.set('view engine', 'handlebars');
}

