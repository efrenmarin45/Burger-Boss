var orm = require("../config/orm.js");

var burgers = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(id, cb) {
        orm.update("burgers", id, function(res) {
            cb(res);
        });
    }
};

module.exports = burgers;