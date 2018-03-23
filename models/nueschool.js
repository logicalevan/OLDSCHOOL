// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var note={
	selectAll: function(cb){
		orm.selectAll("notes", function(res){
			cb(res);
		});
	},

	insertOne: function(colsOne, colsTwo, vals, cb){
		orm.insertOne("notes", colsOne, colsTwo, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(objColVals, condition, cb){
		orm.updateOne("notes", objColVals, condition, function(res){
			cb(res);
		});
	},

	delete: function(condition, cb) {
    orm.delete("notes", condition, function(res) {
      cb(res);
    });
  }

}

module.exports = note;
