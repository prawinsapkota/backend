var express = require('express');
var notices = require('../models/Notice');
var verify = require('../verify');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        notices.find({})
            .then((notices) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(notices);
            }, (err) => next(err))
            .catch((err) => next(err));
    }) 
  
    .post((req, res, next) => {
       notices.create(req.body)
            .then((notice) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(notice);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

router.route('names')
    .get((req, res, next) => {
        notices.findById(req.params.name)
            .then((notice) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(notice);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    router.route('images')
    .get((req, res, next) => {
       notices.findById(req.params.name)
            .then((notice) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.sendFile(notice);
            }, (err) => next(err))
            .catch((err) => next(err));
    });



    router.route('/:id')
    .get((req, res, next) => {
        notices.findById(req.params.id)
            .then((notice) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(notice);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end("POST operation not supported!");
    })
    .put((req, res, next) => {
        notices.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, useFindAndModify: false })
            .then((notice) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(notice);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .delete((req, res, next) => {
        notices.findByIdAndDelete(req.params.id)
            .then((reply) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(reply);
            }, (err) => next(err))
            .catch((err) => next(err));
    });
   

module.exports = router;