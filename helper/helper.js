const validator = require('email-validator');  // Importing the email-validator library and assigning it to validator variable
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

    static timezone(Country)
    {
        
            const abbriviation = getCode(Country)   
            const country = ct.getCountry(abbriviation);
            console.log(country.timezones[0]);
            // Create a Moment.js object representing the current date and time in the Pacific/Honolulu time zone
            const DateTime = moment.tz(country.timezones[0]);
            // Display the current date and time in the Pacific/Honolulu time zone
            let time = DateTime.format('YYYY-MM-DD HH:mm:ss')
    
            return time

    };

    static fileUpload(attachments)
    {
        return new Promise((resolve, reject) =>
        {
            // console.log(attachments);
            if (!attachments)// || !attachments.file || !Array.isArray(attachments.file)) 
            {
                console.log('#### Invalid attachments parameter ####');
                return;
            }
            else
            {
                let file = attachments;
                // console.log(file);
                let fileExtension = file.name.split('.').pop().toLowerCase(); // get the file extension
                if (['png', 'jpg', 'xlsx'].includes(fileExtension)) 
                {
                    // let currentDate = new Date().toISOString().replace(/:/g, '-').replace(/\./g, '-'); // generate current date and time
                    let randomNumber = Math.floor(Math.random() * 1000000); // generate random number
                    let filename = `${randomNumber}_${file.name}`; // use current date, random number and original file name to create a unique file name
                    console.log(filename);
                    file.mv('./attachments/'+filename,(err) => 
                    {
                        if(err)
                        {
                            console.log("Error occurred while storing the uploaded file in the uploads folder", err);
                        }
                        else
                        {
                            console.log('file uploaded');
                        }
                    });                
                }
                else
                {
                    console.log("Invalid Format");
                }
            }
        });
    };

    static passwordvalidation(password)
    {
        return new Promise((resolve, reject) =>
        {
            const phoneNumberRegex = new RegExp(/^(?=.*[^a-zA-Z0-9]).{8,12}$/);
            if(phoneNumberRegex.test(password))
            {
                console.log('True');
                resolve(true)
            }
            else
            {
                console.log('false');
                reject(false)
            }                        
        });        
    };
    
    static emailValidation(email)
    {
        return new Promise((resolve,reject)=>
        {
            if(validator.validate(email)) // Here the checking of the email value is done
            {
                // next();  // If correct then next()
                console.log("True");
            } 
            else 
            {
                console.log("False");
                // res.status(401).json
                // ({
                //     message: "Invalid email"   // Or error message
                // });
            }            
        });
    };






} 