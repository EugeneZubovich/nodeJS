var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Eugene' });
});
router.get('/:id', function (req, res) {
  var url = req.params.id;
    //res.send(req.params);
  res.render('index', {title: url});
});

module.exports = router;
