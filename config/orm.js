var connection = require("../config/connection.js");

var orm = {
	selectAll(tableInput, cb) {
		var queryString = "SELECT * FROM " + tableInput + ";";
    	connection.query(queryString, function(err, result) {
      		if (err) {
	        	throw err;
	    	}
	    	cb(result);
	    });
	},

	insertOne(table, colsOne, colsTwo, vals, cb){
		var queryString = "INSERT INTO " + table;
		console.log(vals);
	    queryString += " (";
	    queryString += colsOne.toString();
	    queryString += ", "
	    queryString += colsTwo.toString();
	    queryString += ") VALUES ("
	    queryString += '"';
	    queryString +="Jeff";
	    queryString += '"';
	    queryString += ", ";
	    queryString += '"';
	    queryString += vals;
	    queryString += '"';
	    queryString += ") ";
	    console.log(queryString);
	    connection.query(queryString, vals, function(err, result) {
	      if (err) {
	        throw err;
	      }

	      cb(result);
	    });
	},

	updateOne(table, objColVals, condition, cb){
		var queryString = "UPDATE " + table;
	    queryString +=  ' SET note ="';
	    queryString += objColVals;
	    queryString += '" WHERE ';
	    queryString += condition;
	    console.log(queryString);
	    connection.query(queryString, function(err, result) {
	      if (err) {
	        throw err;
	      }
	      cb(result);
	    });
	},

	delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
}

module.exports = orm;