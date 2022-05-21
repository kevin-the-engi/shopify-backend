require('dotenv').config()
const path = require('path');
const express = require('express'); 
const { router } = require('../routes');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.use('/', router);

app.listen(port, () => console.log(`Listening on port ${port}`));