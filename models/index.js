module.exports = class Chat{
    constructor(){}

    static home(){
        return new Promise((resolve, reject)=>{
            let data = {
                "Satatus Code " : 200,
                "Message" : "Success"
            }
            resolve(data)
        })
    }
}