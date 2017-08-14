// DEPENDENCIES // 

var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}	else {
	connection = mysql.createConnection({
		host: 'sulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'hwjuxqpdhh3og616',
		password: 'wwhsshhd67m0a1lo',
		database: 'zu7bof0fln0okmoy'
	});	
}

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: '',
	database:'burgers_db'
});


// Make connection.
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
