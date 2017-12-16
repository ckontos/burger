var orm = require("../config/orm.js");

var sushi = {
    all: function(cb) {
        orm.all("sushi", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("sushi", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("sushi", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = sushi;
