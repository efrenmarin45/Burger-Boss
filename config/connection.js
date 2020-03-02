// Setting up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wander89!",
    database: "burgers_db"
  });

// Making DB connection
connection.connect(function(err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});



// Export connection for the ORM to use
module.exports = connection;