const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
require('dotenv').config();
require('./config/database');


const app = express();
const PORT = process.env.PORT || 3001;

//^ Middleware
app.use(logger("dev"));
app.use(express.json());
// will check for a token and create a req.user prop in the request
app.use(require('./config/checkToken'));

//^ Configurations
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));


//^ Routes
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});