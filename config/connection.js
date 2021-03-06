const mysql = require("mysql");
let connection;

if(process.env.JAWSDB_URL)
{
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "brb1992!!",
        database: "burger_db"
    });
}



connection.connect((err)=>
{
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
    console.log(`connected at id ${connection.threadId}`);
});

module.exports = connection;
