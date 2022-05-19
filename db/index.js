const { Pool } = require('pg')
const connectionString = `${process.env.DB_HOST}`;

const pool = new Pool({
  connectionString,
})

pool.connect()
  .then(() => {
    console.log('Connected to Postgres')
  })
  .catch((err) => {
    console.log(err);
  })

module.exports = pool;