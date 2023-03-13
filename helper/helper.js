const validator = require('email-validator');  // Importing the email-validator library and assigning it to validator variable
const { v4: uuidv4 } = require('uuid'); // import uuid module for generating unique identifier   

const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();  //validates international phone numbers

module.exports = class helper
{
    static phoneNumberValidation(phoneNumber,abb)
    {
        return new Promise((resolve,reject)=>
        {
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
    }

    static fileUpload(attachments)
    {
        return new Promise((resolve, reject) =>
        {
            if (!attachments || !attachments.file || !Array.isArray(attachments.file)) 
            {
                console.log('#### Invalid attachments parameter ####');
                return;
            }
            else
            {
                let file = attachments.file;
                // console.log(file);
                let fileExtension = file[0].name.split('.').pop().toLowerCase();
                // console.log(fileExtension);
                let fileExtension2 = file[1].name.split('.').pop().toLowerCase();
                // console.log(fileExtension2);
                if (['jpeg', 'jpg', 'png'].includes(fileExtension) && ['jpeg', 'jpg', 'png'].includes(fileExtension2)) 
                {
                    let filename = uuidv4() + '_' + file[0].name; // generate unique identifier and append to the file name
                    // console.log(filename);
                    let filename2 = uuidv4() + '_' + file[1].name; // generate unique identifier and append to the file name
                    // console.log(filename2);
                    file[0].mv('./attachments/' +filename, (err) =>
                    {
                        if(err)
                        {
                            console.log(`Error while upload this file ${file[0]} to the attachement folder`);
                        }
                        else
                        {
                            // console.log(`First One done`);
                            file[1].mv('./attachments/' +filename2, (err) =>
                            {
                                if(err)
                                {
                                    console.log(`Error while upload this file ${file[1]} to the attachement folder`);
                                }
                                else
                                {
                                    //  console.log(`Second also done`);
                                    console.log('Both attachements are uploaded successfully');
                                    let insQuery = `INSERT INTO settings(company_title, menu_title, address, email, phone_number, favicon_name, logo_name, language_name, currency_name, discount_per, licensce_number) VALUES(?,?,?,?,?,?,?,?,?,?,?)`;
                                    con.query(insQuery, [company_title, menu_title, address, email, phone, filename, filename2, language, currency, discount_percentage, licenses_number], (err, result1) =>
                                    {
                                        if(result1.length != 0)
                                        {
                                            console.log(' #### Data entered into the settings databse successfully #### ');
                                            resolve('true');
                                        }
                                        else
                                        {
                                            console.log(` #### Error Occured While entering the data into the setting table after the file upload #### `, err.message);
                                            reject(err)
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
                else
                {
                    console.log('Invalid file format. Only JPG, JPEG, and PNG files are allowed.');
                    reject(err)
                }
            } 
            
        });
    }



}