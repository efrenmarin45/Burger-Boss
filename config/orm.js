// Importing the connection file
var connection = require("./connection.js");



//Sets a blank array and pushes user input into it
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}



//Set up ORM variable
var orm = {
    //This function selects 'all' from the DB table burgers
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?? ;";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    //This function inserts user inpute into the DB table burgers
    create: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    },
    //This function updates the table based on user input
    update: function(table, id, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured = true";
        queryString += " WHERE id = ";
        queryString += id;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        });
    }
};



//Exports the ORM for our app to use
module.exports = orm;