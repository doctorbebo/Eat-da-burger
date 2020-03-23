const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get('/', (req, res)=>
{
    burger.all((results)=>
    {
        let burgers =
        {
            readyToEat: [],
            devoured: []
        }
        results.forEach(burger => {
            console.log(burger.devoured);
            if(burger.devoured === 0)
            {
                burgers.readyToEat.push(burger);
            }else
            {
                burgers.devoured.push(burger);
            }
        });

        console.log(burgers);
        res.render("burger", burgers);        
    });
});

router.get('/burger', (req, res)=>
{
    burger.all((results)=>
    {
        res.send(results);        
    });
});

router.put('/api/burger/:id', (req, res)=>
{
    burger.update(req.params.id, req.body.state,()=>
    {
        res.send("burger updated");
    });
});

router.post('/api/new/burger/:name', (req, res)=>
{
    burger.create(req.params.name, false, ()=>
    {
        res.send("burger created");
    });
});

router.delete('/', (req, res)=>
{

});

module.exports = router;
