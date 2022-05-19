require('dotenv').config()
const express = require('express'); 
const db = require('../db')
const routes = require('../routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/api', (req, res) => { 
  res.send({ message: "Hello from server!" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));