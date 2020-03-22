const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "brb1992!!",
    database: "burger_db"
});

connection.connect((err)=>
{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    console.log(`connected at id ${connection.threadId}`);
});

module.exports = connection;
