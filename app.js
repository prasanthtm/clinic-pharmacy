const upload = require('express-fileupload');
const express = require('express');
const router= require('./routes/users')
const app = express();
const bodyParser = require('body-parser'); // Importing bodyParser library after installing it using npm i body-parser 


app.use(bodyParser.urlencoded({ extended: true })); // through this statement we can used the json data in the form data
app.use(bodyParser.json()); // through this statement we can used the json data in the json structure
app.use(express.json()); // This line is adding middleware to the app that parses incoming request bodies with JSON payloads. It allows us to access request data sent in JSON format through the `req.body` property in our route handlers.
app.use(upload()); // We are using the upload file which have all the functionalities
app.use(router)
// require('./routes/settings.route')(app);


 
module.exports = app; 