// 1 require mongoose

const mongoose = require('mongoose');

// 2 create schema

const {Schema, model} = mongoose;

// 3 creation

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: Number
    }
});
// 4 export
module.exports = Contact = model ("user", contactSchema);
