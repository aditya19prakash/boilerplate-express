let express = require('express');
let app = express();

// Log "Hello World" to the console
console.log("Hello World");

// Create a route to respond to GET requests
app.get('/', (req, res) => {
  res.send('Hello, World from Express!');
});

// Start the server and make it listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

module.exports = app;
