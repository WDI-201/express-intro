var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Michael's Express!!!!" });
});

router.get('/hello', function(req,res) {
  res.send('Hello World from index')
})

router.get('/hello-array', function(req,res) {
  res.send(['Hello', 'World', 'from', 'index'])
})

router.get('/hello-function', function(req,res) {
  let newWord = 'Hello World'
  res.send({
    myWord: newWord
  })
})

router.post('/post', function(req,res) {
  res.send('success')
})

module.exports = router;
