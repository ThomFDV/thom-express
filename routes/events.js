'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const EventController = require('../controllers').EventController;

const router = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res, next) => {
    res.json(EventController.getAll());
});

router.get('/search', (req, res, next) => {
    res.json(EventController.getSearch(req.query.from, req.query.to, parseInt(req.query.limit)));
});

router.get('/:value', (req, res, next) => {
    res.json(EventController.getID(parseInt(req.params.value))).end();
});

router.put('/:value', (req, res, next) => {
    res.json(EventController.changeAttribute(parseInt(req.query.max), req.query.date, parseInt(req.params.value)));
});

router.delete('/:value', (req, res, next) => {
    EventController.deleteID(parseInt(req.params.value));
});

router.post('/', (req, res, next) => {
    if (!req.body.name || !req.body.location){
        return res.status(400).end();
    }

    EventController.addEvent(req.body.name, req.body.max, req.body.date, req.body.location);
    res.status(201).end();
});

module.exports = router;
