var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers_db", function(res) {
          cb(res);
        });
      },
      insertOne: function(cols, vals, cb) {
        orm.create("burgers_db", cols, vals, function(res) {
          cb(res);
        });
      },
      updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers_db", objColVals, condition, function(res) {
          cb(res);
        });
      },
      delete: function(condition, cb) {
        orm.delete("burgers_db", condition, function(res) {
          cb(res);
        });
      }
    };

module.exports = burger;