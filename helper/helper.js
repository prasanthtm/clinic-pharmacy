const validator = require('email-validator');  // Importing the email-validator library and assigning it to validator variable
const { v4: uuidv4 } = require('uuid'); // import uuid module for generating unique identifier   
const multer = require('multer');
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();  //validates international phone numbers
const { getCode } = require('country-list');



module.exports = class helper
{
    static phoneNumberValidation(phoneNumber,country)
    {
        return new Promise((resolve,reject)=>
        {
            //For getting country abbriviation
            const abb =getCode(country)
            // This is regex or regular expression for verify the contact number validation
            const phoneNumberRegex = new RegExp(/^[0-9+ \s \+ \( \) \-]+$/);
            const contactNO= phoneUtil.isValidNumberForRegion(phoneUtil.parse(phoneNumber, `${abb}`), `${abb}`);
            if(phoneNumberRegex.test(phoneNumber))
            {
                if(contactNO)
                {
                    resolve(true)
                }
                else
                {
                    reject(false)
                }
            }
            else
            {
                reject(false)
            }
        });
    }
}