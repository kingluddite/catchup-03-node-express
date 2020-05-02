// Dependencies
// ===========================================================
var express = require('express');

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
var characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000,
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200,
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350,
  },
];
// ===========================================================
// var yoda = {
//   name: 'Yoda',
//   role: 'Jedi Master',
//   age: 900,
//   forcePoints: 2000,
// };

// var darthmaul = {
//   name: 'Darth Maul',
//   role: 'Sith Lord',
//   age: 200,
//   forcePoints: 1200,
// };

// // Create one more data entry for the character Obi Wan Kenobi.
// // Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
// //

// // YOUR CODE GOES HERE
// var obiwankenobi = {
//   name: 'Obi Wan Kenobi',
//   role: 'Jedi Knight',
//   age: 42,
//   forcePoints: 1350,
// };

// Routes
// ===========================================================
app.get('/', function (req, res) {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/yoda', function (req, res) {
  res.json(yoda);
});

app.get('/darthmaul', function (req, res) {
  res.json(darthmaul);
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

app.get('/api/characters', function (req, res) {
  return res.json(characters);
});

app.get('/obiwankenobi', function (req, res) {
  res.json(obiwankenobi);
});

// Displays a single character, or shows "No character found"
app.get('/api/characters/:character', function (req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.send('No character found');
});

// Create New Characters - takes in JSON input
app.post('/api/characters', function (req, res) {
  console.log(req.body);
  var newCharacter = req.body;

  // console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Listener
// ===========================================================
app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT);
});
