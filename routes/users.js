var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', (req, res, next)=> 
{
  helper.emailValidation('abc@gmail.com')
});



module.exports = router; 
