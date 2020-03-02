// Setting up MySQL connection
var mysql = require("mysql");

var connection = mysql.createconnection({
    host: "us-cdbr-iron-east-04.cleardb.net",
    port: 3306,
    user: "be39954d6a60d9",
    password: "e0908ac3",
    database: "heroku_7f17959c90e9253"
  });

// Making DB connection
// connection.connect(function(err) {
//   if (err) {
//     console.error("Error connecting: " + err.stack);
//     return;
//   }
//   console.log("Connected as id " + connection.threadId);
// });



// Export connection for the ORM to use
module.exports = connection;