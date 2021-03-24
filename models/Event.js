var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let EventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    place: {
        type: String,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    }
},
    {
    timestamps: true
    });

var Event = mongoose.model('Event', EventSchema);
module.exports = Event;