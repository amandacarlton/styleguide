var express = require('express');
var router = express.Router();
var unirest = require('unirest');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('styleguide');
});

router.get('/styleguide', function(req, res, next) {
  res.render('styleguide');
});

router.get('/times', function(req, res, next){
  unirest.get("http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1?api-key=b90fe8097fa37a13bc5bdb671a45556a:3:72525979")
  .end(function (response) {
    console.log(response.body.results[0]);
  
  res.render('times', {info:response.body.results});
});
});
module.exports = router;
