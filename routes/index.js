var express = require('express');
var router = express.Router();
const axios = require('axios')

const jsonAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
const apiAxios = axios.create({
  baseURL: 'https://api.publicapis.org/entries'
})

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

router.get('/api/:category', function(req, res){
  // console.log(req.params)
  // apiAxios
  res.send(req.params)
})

router.get('/json/todos/:userid', function(req,res) {

  const outputFunc = async () => {
    try { 
          let userResponse = await jsonAxios(`/users/${req.params.userid}`)
          // console.log(userResponse.data);
          let todoResponse = await jsonAxios(`/users/${req.params.userid}/todos`)
          // console.log(todoResponse.data);
          // res.send(todoResponse.data)
          let filteredOutput = todoResponse.data.filter(e => e.completed === true)
          let finalOutput = {
            user: userResponse.data,
            todos: filteredOutput
          }
          res.send(finalOutput)
    } catch (error) {
      console.log('!@-------ERROR!!!-------@!')
      console.log(error.code)
    }
  }
  outputFunc()
})

module.exports = router;
