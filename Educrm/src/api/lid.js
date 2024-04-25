const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const lidSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    surname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    born: {
        type: String,
        required: true,
        trim: true
    },
    pNumber: {
        type: String,
        required: true,
        trim: true
    },
    parentsNumber: {
        type: String,
        required: true,
        trim: true
    },
    sub1: {
        type: String,
        required: true,
        trim: true
    },
    sub2: {
        type: String,
        required: true,
        trim: true
    },
    free: {
        type: String,
        required: true,
        trim: true
    }
    
})

const Lid = mongoose.model('Lid', lidSchema);

router.get('/', async (req, res) => {
    const lid = await Lid.find({});
    res.send(lid);
    console.log("Lid-Get-All");
});

router.get('/:id', async (req, res) => {
    const lid = await Lid.findById(req.params.id);
    res.send(lid);
    console.log("Lid-Get-Id");
})

router.post('/', async (req, res) => {
    const lid = new Lid({
        name: req.body.name,
        surname: req.body.surname,
        address: req.body.address,
        born: req.body.born,
        pNumber: req.body.pNumber,
        parentsNumber: req.body.parentsNumber,
        sub1: req.body.sub1,
        sub2: req.body.sub2,
        free: req.body.free
    });
    const result = await lid.save();
    res.send(result);
    console.log("Lid-Post");
});

module.exports.router = router;