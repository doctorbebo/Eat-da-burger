const orm = require("../config/orm.js");

orm.all('burgers', (results)=>
{
    console.log(results);
    // results.forEach(element => {
    //     console.log(element.id);
    // });
});


// orm.update('burgers', 3, true, (results)=>
// {
//     console.log(results);
// });


// orm.create('burgers', 'leaf burger', false, (results)=>
// {
//     console.log(results);
// });

// orm.delete('burgers', 4, (results)=>
// {
//     console.log(results + results + results);
// })