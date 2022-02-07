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
  let carArr = [
    {
      id:0,
      category: "Car",
      make: 'BMW',
      model: 'M3'
    }
  ]

  let nameArr = [
    {
      id: 0,
      category: "Name",
      firstname: "Jay",
      lastname: "Leno"
    }
  ]
  let nameObj = {
    id: nameArr.length,
    category: "Name",
    firstname: req.params.firstname,
    lastname: req.params.lastname
  }
  let carObj = {
    id: carArr.length,
    category: "Car",
    make: req.params.make,
    model: req.params.model
  }
  carArr.push(carObj)
  nameArr.push(nameObj)


  let finalArr = [nameArr, carArr]
  let outputObj = {
    count: 2,
    entries: finalArr

  } 
  res.send(outputObj)
})
module.exports = router;
