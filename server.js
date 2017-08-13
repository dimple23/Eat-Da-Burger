// DEPENDENCIES // 
// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

//Serve static content for the app from the "public" directory in the application directory
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false

}));

//override with POST having ?_method = DELTE
app.use(methodOverride('_method'));

//handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'

}));
app.set('view engine', 'handlebars');

//pointing to where our Express routes are located
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

var port = 3000;
app.listen(port);

app.get('/', function(req, res) {
	res.render('index');
});