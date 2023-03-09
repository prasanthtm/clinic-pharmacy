const chatModel = require('../models/index')

exports.homeResponce = async(req, res, next)=>{
    let data = await chatModel.home();
    res.send(data);
}