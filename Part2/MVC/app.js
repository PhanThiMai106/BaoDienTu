

var express = require('express');
var exphbs  = require('express-handlebars');
  var morgan = require('morgan');

 var app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded());
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.use(require('./middlewares/local.mdw'));

app.get('/', function (req, res) {
    res.render('home');
});

app.use('/admin/categories', require('./routes/category.route'));

app.use('/admin/categories', require('./routes/admin/category.route'));

app.use('/admin/myaccount', require('./routes/admin/account.route'));

app.use('/admin/users', require('./routes/admin/user.route'));

app.use('/admin/hashtag', require('./routes/admin/tag.route'));

app.use('/admin/Articles', require('./routes/admin/article.route'));

app.use('/writer/post', require('./routes/writer/post.route'))

app.use('/editer/index', require('./routes/editer/article.route'))

app.use('/subcriber/account', require('./routes/subcriber/account.rout'))

app.listen(3000);