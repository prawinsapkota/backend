var express = require('express');
var Events = require('../models/Event');
var Client = require('../models/Client');
var Request = require('../models/Requestevent');
var Notice = require('../models/Notice');

var router = express.Router();


router.route('/')
.get(async (req, res, next) => {
    let events = await Events.find({});
    let clients = await Client.find({});
    let requests = await Request.find({});
    let notices = await Notice.find({});
    
    res.json({
        eventcount: events.length,
        clientcount: clients.length,
        requestcount: requests.length,
        noticecount: notices.length
        
        
    });
    
    
});
module.exports = router;


