const validator = require('email-validator');  // Importing the email-validator library and assigning it to validator variable
const { v4: uuidv4 } = require('uuid'); // import uuid module for generating unique identifier   
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();  //validates international phone numbers
const { getCode } = require('country-list');
const ct = require('countries-and-timezones');
const moment = require('moment-timezone');

module.exports = class helper
{
    static phoneNumberValidation(phoneNumber,country)
    {
        return new Promise((resolve,reject)=>
        {
            //For getting country abbriviation
            const abb = getCode (country)
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
    };

    static timezone()
    {
        return new Promise((resolve,reject)=>
        {
            console.log("Inside");     
            const abb = getCode("nepal")
            console.log(abb);
            const country = ct.getCountry(abb);
            console.log(country.timezones[0]);
            // Create a Moment.js object representing the current date and time in the Pacific/Honolulu time zone
            const DateTime = moment.tz(country.timezones[0]);
            // Display the current date and time in the Pacific/Honolulu time zone
            let time = DateTime.format('YYYY-MM-DD HH:mm:ss')
            console.log(time);


        });
    };






}