var express = require('express');
var events = require('../models/Event');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        events.find({})
            .then((events) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(events);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        events.create(req.body)
            .then((event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('names')
    .get((req, res, next) => {
        events.findById(req.params.name)
            .then((event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    router.route('images')
    .get((req, res, next) => {
        events.findById(req.params.name)
            .then((event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.sendFile(event);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



    router.route('/:id')
    .get((req, res, next) => {
        events.findById(req.params.id)
            .then((event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        events.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((event) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(event);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        events.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
   

module.exports = router;