var express = require('express');
var router = express.Router();
const helper = require('../helper/helper.js'); 

// console.log(helper.timezone('india'));

router.post('/upload', (req, res, next)=> 
{
    // console.log(req.files);
    let attachment = req.files
    // console.log(attachment.file[0]);
    helper.fileUpload(attachment.file[0]);
    helper.fileUpload(attachment.file[1]);
});
   


module.exports = router;   