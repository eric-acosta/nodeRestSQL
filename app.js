var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require('./config/database');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/personas',(req,res)=>{
  db.personas.create({
    nombre:req.body.nombre,
    apellidos:req.body.apellidos,
    edad:req.body.edad
  })
    .then(doc=>{
      res.json(doc)
    }).catch(err=>{
      console.log(err);
    })
});

app.get('/personas',(req,res)=>{
  db.personas.findAll()
  .then(doc=>{
    res.json(doc)
  }).catch(err=>{
    console.log(err);
  })
});

app.get('/personas/:id',(req,res)=>{
  db.personas.findAll({
    where: {id:req.params.id}
  })
  .then(doc=>{
    res.json(doc)
  }).catch(err=>{
    console.log(err);
  })
});

app.put('/personas/:id',(req,res)=>{
  db.personas.update({nombre:req.body.nombre,
    apellidos:req.body.apellidos,
    edad:req.body.edad},{
    where: {id:req.params.id}
  })
  .then(doc=>{
    res.json(doc)
  }).catch(err=>{
    console.log(err);
  })
});

app.delete('/personas/:id',(req,res)=>{
  db.personas.destroy({
    where: {id:req.params.id}
  })
  .then(doc=>{
    res.json(doc)
  }).catch(err=>{
    console.log(err);
  })
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
