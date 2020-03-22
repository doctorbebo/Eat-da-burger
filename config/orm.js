const connection = require("../config/connection.js");


const orm = 
{
    all: (tableInput, cb) =>
    {
        let qString = `SELECT * FROM ${tableInput}`;
        callQuery(qString, (results)=>
        {
            console.log(`\n within all function ${results}`);

            cb(results);
        });
    },

    update: ()=>
    {
        throw "orm update not implemented";
    },

    delete: ()=>
    {
        throw "orm delete not implemented";
    }
}

function callQuery(queryString, cb)
{
    connection.query(queryString,(err, results)=>
    {
        if(err) throw err;

        console.log(`\n within callQuery function \n ${results}`);
        cb(results);
    });
};

module.exports = orm;