var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hello', function(req,res) {
  res.send('Hello World from users')
})

router.get('/name/:firstname',function(req,res){
  console.log(req.params);  //  /users/name/Bob -> {firstname: "Bob"} -> req.firstname = "Bob"
  res.send("Check your log")
})

router.get('/name/:firstname/:lastname/car/:make/:model',function(req,res){
  console.log(req.params);  //  /users/name/Bob -> {firstname: "Bob"} -> req.firstname = "Bob"
  let nameObj = {
    category: "Name",
    firstname: req.params.firstname,
    lastname: req.params.lastname
  }
  let carObj = {
    category: "Car",
    make: req.params.make,
    model: req.params.model
  }

  let finalArr = [nameObj, carObj]
  res.send(finalArr)
})
module.exports = router;
