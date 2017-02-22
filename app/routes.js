var express = require('express');
var router = express.Router();

var exampleCtrl = require('./controllers/example-controller');

/* Example route */
router.get('/', exampleCtrl.example);

module.exports = router;