const orm = require("../config/orm.js");


const burger = 
{ 
    all:(cb)=>
    {
        orm.all('burgers', (results)=>
        {
            cb(results);
        });
    },
    update: (id, devouredState, cb)=>
    {
        orm.update('burgers', id, devouredState, (results)=>
        {
            cb(results);
        });
    },
    create: (name, devouredState, cb)=>
    {       
        orm.create('burgers', name, devouredState, (results)=>
        {
            cb(results);
        });
    },
    delete: (id, cb)=>
    {       
        orm.delete('burgers', id, (results)=>
        {
            cb(results);
        });
    }
}

module.exports = burger;