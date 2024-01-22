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

//Add a new contact into the database

const addContact = (id, username, firstname, lastname, email, city, state, phone) => {
    return db.contact.findOne({ id }).then((result) => {
        if (result) {
            return {
                statusCode: 404,
                message: "Contact already exists",
            };
        } else {
            // The id is not in the database, then save it to the database
            const newContact = new db.contact({
                id,
                username,
                firstname,
                lastname,
                email,
                city,
                state,
                phone,
            });

            newContact.save();

            return {
                statusCode: 200,
                message: 'Contact added successfully',
            };
        }
    });
};

//get a particular employee from database

const getAContact = (id) => {
    return db.contact.findOne({id}).then((result) => {//result - details of an contact
        if(result){
            return {
                statusCode:200,
                contact:result
            }
        } else {

            return{
                statusCode:404,
                message:'cant find contact'
            }

        }

    })



}

//Delete an  employee from  the database
const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"Contact deleted successfully"
        }
    })
    .catch((error)=>{
        return{
            statusCode:401,
            message:"Couldn't find contact"
        }
    })

}






module.exports = {
    getAllContacts,
    addContact,
    getAContact,
    deleteContact
  
}