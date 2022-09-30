const express = require('express');
const cors = require('cors');
require('dotenv').config();
const db = require('./db/db-connection.js');

const app = express();

const PORT = 5000;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
//get route
app.get('/', (req, res) => {
  res.json({ message: 'Hello from My template ExpressJS' });
});


//GET for species
app.get('/api/species', cors(), async (req, res) => {
  try {
    const { rows: species } = await db.query('SELECT * FROM species');
    res.send(species);
  } catch (e) {
    return res.status(400).json({ e });
  }
});


//POST for species
// app.post('/api/species', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

//GET for individuals
app.get('/api/individuals', cors(), async (req, res) => {
  try {
    const { rows: individuals } = await db.query('SELECT * FROM individuals');
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//GET for sightings
app.get('/api/jointable', cors(), async (req, res) => {
  try {
    const { rows: jointable } = await db.query('SELECT * FROM jointable');
    res.send(jointable);
  } catch (e) {
    return res.status(400).json({ e });
  }
});







// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
