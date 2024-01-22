//import mongoose

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Contactlist')

//modal creation

const contactSchema = new mongoose.Schema({
    id: Number,
    name: {
      firstname: String,
      lastname: String
    },
    age: String,
    designation: String,
    salary: String,
    email: String,
    username: String,
    password: String,
    address: {
      geolocation: {
        lat: String,
        long: String
      },
      city: String,
      street: String,
      number: Number,
      zipcode: String
    },
    phone: String
  });

const contact = mongoose.model('contact', contactSchema);
    



module.exports = {
    contact
}