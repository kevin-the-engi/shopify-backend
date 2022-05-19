require('dotenv').config()
const express = require('express'); 
const { router } = require('../routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));