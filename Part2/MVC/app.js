

var express = require('express');
var exphbs  = require('express-handlebars');
  var morgan = require('morgan');

 var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.use('/admin/categories', require('./routes/admin/category.route'));

app.use('/admin/myaccount', require('./routes/admin/account.route'));

app.use('/admin/users', require('./routes/admin/user.route'));

app.use('/admin/hashtag', require('./routes/admin/tag.route'));

app.listen(3000);