var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  res.render('index', { title: 'Express' });
});

module.exports = router;

// Module : 和数据打交道
// C : 控制页面和跳转
// VIEW : 视图