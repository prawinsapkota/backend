var express = require('express');
var requestevents = require('../models/Requestevent');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        requestevents.find({})
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
        requestevents.create(req.body)
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('names')
    .get((req, res, next) => {
       requestevents.findById(req.params.name)
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    router.route('images')
    .get((req, res, next) => {
        requestevents.findById(req.params.name)
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.sendFile(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



    router.route('/:id')
    .get((req, res, next) => {
        requestevents.findById(req.params.id)
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        requestevents.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        requestevents.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

  router.route('/username')
    .get((req, res, next) => {
        requestevents.findByUsername(req.params.username)
            .then((requestevents) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(requestevents);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
   

module.exports = router;