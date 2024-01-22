//import mongoose

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Contactlist')

//modal creation

const contactSchema = new mongoose.Schema({
    id: String,
    username: String,
    firstname: String,
    lastname: String,
    email: String,
    city: String,
    state: String,
    phone: String
  });

const contact = mongoose.model('contact', contactSchema);
    



module.exports = {
    contact
}