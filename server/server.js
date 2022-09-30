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


// POST for species
app.post('/api/species', cors(), async (req, res) => {
  const species = {
    id: req.body.id,
    common_name: req.body.common_name,
    scientific_name: req.body.scientific_name,
    population: req.body.population,
    conservation_status: req.body.conservation_status,
    created_on: req.body.created_on,
  };
  console.log([species.common_name, species.scientific_name]);
  try {
  const addSpecies = await db.query(
    "INSERT INTO species (common_name, scientific_name) VALUES($1, $2) RETURNING *",
    [addSpecies.common_name, addSpecies.scientific_name],
  );
  console.log(addSpecies);
  res.json(addSpecies);
  } catch(e) {
    return res.status(400).json({e})
  }
});

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
