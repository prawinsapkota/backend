var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let ClientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
           admin: {
        type: Boolean,
        default: false
},
    email: {
        type: String,
        required: true
    },

 
    password: {
        type: String,
        required: true
    } 
});

ClientSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Client', ClientSchema);