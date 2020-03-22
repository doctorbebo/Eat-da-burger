const orm = require("../config/orm.js");

orm.all('burgers', (results)=>
{
    results.forEach(element => {
        console.log(element.id);
    });
});


orm.update();