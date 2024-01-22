//import db.js file

const db = require('./db')

const getAllContacts = () => {
    return db.contact.find().then((result) => {//result - details of contact
        if(result){
            return {
                statusCode:200,
                contacts:result
            }
        } else {

            return{
                statusCode:404,
                message:'cant find contacts'
            }

        }

    })

}


module.exports = {
    getAllContacts
}