var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  var temp = [];
  //console.log(req.body.abc)
  if(req.body.abc == 1){
    temp=[1,2,3]
  }else{
    temp=[4,5,6]
  }
  res.send({ title: temp });
});

module.exports = router;
