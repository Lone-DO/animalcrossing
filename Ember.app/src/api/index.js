'use strict';

var express = require('express');
var Gen = require('../models/gen.js');

var router = express.Router();

router.get('/gens', function (request, response) {
    Gen.find({}, function (err, gens) {
        if (err) {
            //do something
            return response.status(500).json({message: err.message});
        }
        response.json({gens: gens});
    });
});

// TODO: Add Post Route, create new entries

router.post('/gens', function (request, response) {
    var gen = request.body;
    Gen.create(gen, function (err, gen) {
        if (err) {
            //do soemthing
            return response.status(500).json({err: err.message});
        }
        response.json({gen: gen, message: 'Generation Created'});
    });
});

// Todo: Add Put Route, Update Existing entries
router.put('/gens/:id', function (request, response) {
    var id = request.params.id,
        gen = request.body;
    if (gen && gen._id !== id) {
        return response.status(500).json({err: "Ids dont match!"});
    }
    Gen.findByIdAndUpdate(id, todo, {new: true}, function (err, todo) {
        if (err) {
            //do soemthing
            return response.status(500).json({err: err.message});
        }
        response.json({'gen': gen, message: 'Generation Updated.'});
    });
});

// Todo: Add Del Route, Remove existing Entries
router.delete('/gens/:id', function (request, response) {
    var id = request.params.id;
    Gen.findByIdAndRemove(id, function (err, result) {
        if (err) {
            return response.status(500).json({ err: err.message });
        }
        response.json({ message: 'Generation Deleted' });
    });
});



module.exports = router;