let express = require('express');
let app = express();

// --> 7)  Mount the Logger middleware here
// app.use(function middleware(req, res, next) {
//   console.log(req.method + ' ' + req.path + ' - ' + req.ip);
//   next();
// });

console.log("Hello World");

// Root route should respond with "Hello Express"
app.get("/", function(req, res) {
  res.send("Hello Express");
});

module.exports = app;