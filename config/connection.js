// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "mcldisu5ppkm29wf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "jlqoiim1iqy3l2be",
    password: "sasrokvf2xzhzcc8",
    database: "xh7az4zdcwb950sw"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
