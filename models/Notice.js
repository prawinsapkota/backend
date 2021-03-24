var mongoose = require('mongoose');

var Schema = mongoose.Schema;

let NoticeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    info: {
        type: String,
        required: true
    }
},
    {
    timestamps: true
    });

var Notice = mongoose.model('Notice', NoticeSchema);
module.exports = Notice;