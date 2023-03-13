require('dotenv').config(); // Importing the dotenv library
const app = require('./app');

app.listen(process.env.PORT, (err) =>
{
    if(err)
    {
        console.log('Error while starting the application');
    }
    else
    {
        console.log("Application stated running");
    }

})