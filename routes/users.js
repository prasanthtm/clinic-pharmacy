var express = require('express');
var router = express.Router();
const helper =require('../helper/helper')
helper.emailValidation('abc@gmail.com')
/* GET users listing. */
router.get('/', (req, res, next)=> {

  res.send('respond with a resource');
});

module.exports = router;
