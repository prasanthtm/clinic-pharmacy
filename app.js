const upload = require('express-fileupload');
const express = require('express');
            
const app = express();


app.use(express.json()); // This line is adding middleware to the app that parses incoming request bodies with JSON payloads. It allows us to access request data sent in JSON format through the `req.body` property in our route handlers.
app.use(upload()); // We are using the upload file which have all the functionalities

// require('./routes/settings.route')(app);



module.exports = app;