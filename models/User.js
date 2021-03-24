var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
//       admin: {
//        type: Boolean,
//        default: false
//},
    username: {
        type: String,
        required: true,
        unique: true
    },
 
    password: {
        type: String,
        required: true
    } 
    
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);