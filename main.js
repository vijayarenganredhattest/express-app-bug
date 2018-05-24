const express = require('express')
const app = express()


// This is out apps base route. Any request to localhost:3000/
// is handled here
app.get('/', function(req, res) {

	// Start our reponse string
	var response = 'Hello ';

	// Lets fetch our username for somewhere
	getUserName(function(err, name) {
		if (err) {
			return res.status(500).send('Something is not right!')
		}
		// Join our strings
		response = response + name;
	});

	// Return response to client
	res.send(response)
})


// This function will return our username to print
function getUserName(callback) {
	// Wrapping it in a timeout 
	// to simulate if this is a database request
	setTimeout(function() {
		// Return the username
		return callback(null, "Joe Bloggs")
	}, 200)
}

// Port for server to start and listen on
app.listen(3000, () => console.log('Buggy app listening on port 3000!'))