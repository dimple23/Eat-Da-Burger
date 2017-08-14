/* Here is where you setup a virtual model for how to interface with the database */

var orm = require('../config/orm.js');

//Create the burger object
var burger = {
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res){
			cb(res);
		});
	},
	
	// cols and vals are arrays
	insertOne: function (cols, vals, cb) {
		orm.create('burgers', cols, vals, function(res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.update('burgers', objColVals. condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;