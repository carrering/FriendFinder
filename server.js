//npm packages

var express = require("express")
var bodyParser = require("body-parser")


//creating an express server
var app = express()


// set the port
var PORT = process.env.PORT || 8080

// Set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Router
require("./app/routing/apiRoutes")(app)
require("./app/routing/htmlRoutes")(app)


// =============================================================================
// LISTENER
// start server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
  })
  

