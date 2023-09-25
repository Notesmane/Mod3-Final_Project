const express = require("express");
const path = require("path");
const Task = require('./models/Tasks');
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
app.use('/api/tasks', require('./routes/api/tasks'));

//& creates a task, ref twitter-app/server.js Create POST section


// //& updates the task to the task list, ref twitter-app/server.js Create UPDATE section
// app.put("/orders/new/:id", async (req, res) => {
//   const {id} = req.params; // destructures the id
//   if (req.body.sponsored === "on") {
//       req.body.sponsored = true;
//   } else {
//       req.body.sponsored = false;
//   }
//   try {
//       // const tweetToUpdate = await Tweet.findById();
//       const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
//           new: true, // this is needed so that it returns the new document, not the old version before the update
//       });
//       res.redirect(`/orders/new/${id}`);
//   } catch (e) {
//       console.log(e);
//   }
// })



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(PORT, () => {
  console.log(`Express app running on port ${PORT}`);
});