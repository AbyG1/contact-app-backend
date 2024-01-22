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




module.exports = {
    getAllContacts,
    addContact
}