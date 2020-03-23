const connection = require("../config/connection.js");


const orm = 
{
    all: (tableInput, cb) =>
    {
        logTable(tableInput,(results)=>
        {
            cb(results);
        })
    },

    update: (tableInput, id, devouredState, callBack)=>
    {
        let qString = `UPDATE ${tableInput} SET devoured = ${devouredState} WHERE id = ${id}`;
        callQuery(qString, ()=>
        {
            qString = `SELECT * FROM ${tableInput} WHERE id = ${id}`;
            callQuery(qString, (results)=>
            {
                callBack(`burger id: ${id} updated devour state to \n ${results[0].devoured}`);

            });
        });
    },

    delete: (tableInput, id, cb)=>
    {
        let qString = `DELETE FROM ${tableInput} WHERE id = ${id}`;
        callQuery(qString, (results)=>
        {
            cb(results);
            logTable(tableInput,(results)=>
            {
                console.log(results);
            });
        }) 
    },

    create: (tableInput, burgerName, devouredState, cb)=>
    {
       // let qString = `INSERT INTO ${tableInput} (name, devoured) VALUES (${burgerName}, ${devouredState});`;
       let qString = `INSERT INTO ${tableInput} (name, devoured) VALUES ('${burgerName}', ${devouredState});`
        callQuery(qString, (results)=>
            {
                    cb (results)
            });
    }
}

function callQuery(queryString, cb)
{
    connection.query(queryString,(err, results)=>
    {
        if(err) throw err;

        cb(results);
    });
};

function logTable(table ,cb)
{
    connection.query(`SELECT * FROM ${table};`, (err, results)=>
    {
        if (err) throw err;

        cb(results);
    })
}

module.exports = orm;