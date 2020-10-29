const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    avatar: {
        type: String,
        required : true,
    },
    fistname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    jobtitle: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model( "User" , UserSchema );