var express = require('express');
var router = express.Router();
const helper = require('../helper/helper'); 



console.log(helper.timezone('india'));
/* GET users listing. */
// router.get('/', (req, res, next)=> 
// {
//   helper.emailValidation('abc@gmail.com')
// });



module.exports = router; 
