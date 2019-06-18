// var express = require('express');
// var morgan = require('morgan');

// var app = express();

// app.use(morgan('dev'));
// app.engine('handlebars', exphbs());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));



var express = require('express');
  var morgan = require('morgan');


 var app = express();

 //app.use(morgan('dev'));
 // app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));





 require('./middlewares/view-engine')(app);
 require('./middlewares/session')(app);
require('./middlewares/passport')(app);
 require('./middlewares/upload')(app);

app.use(require('./middlewares/auth-locals.mdw'));
 
app.use(require('./middlewares/locals.mdw'));

app.get('/', (req, res) => {
  res.render('home');
})

 app.use('/demo', require('./routes/demo.route'))

 app.use('/account', require('./routes/account.route'))
 app.use('/categories', require('./routes/category.route'))
 app.use('/admin/categories', require('./routes/admin/category.route'))
 app.use('/admin/hashtag', require('./routes/admin/tag.route'));
 app.use('/admin/users', require('./routes/admin/user.route'));
app.use('/editer',require('./routes/editer.route'));
app.use((req, res, next) => {
  res.render('404', { layout: false });
})

app.use((error, req, res, next) => {
  res.render('error', {
    layout: false,
    message: error.message,
    error
  })
})

app.listen(5000, () => {
  console.log('server is running at http://localhost:5000');
})