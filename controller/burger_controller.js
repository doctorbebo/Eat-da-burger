const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get('/', (req, res)=>
{
    burger.all((results)=>
    {
        res.send(results);
    })
});

router.put('/', (req, res)=>
{

});

router.post('/', (req, res)=>
{

});

router.delete('/', (req, res)=>
{

});


