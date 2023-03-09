var express = require('express');
var router = express.Router();

const homeController = require('../controllers/index');

/* GET home page. */
router.get('/', homeController.homeResponce);

module.exports = router;
