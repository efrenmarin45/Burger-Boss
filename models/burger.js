//Importing our ORM to use
var orm = require("../config/orm.js");



//Our burger model using the DB
var burgers = {
    //All burgers in db
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },
    //Inserts into DB 
    insert: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //Updates DB
    update: function(id, cb) {
        orm.update("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;