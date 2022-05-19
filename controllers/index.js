const db = require('../db')

const createItem = (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO inventory(name) VALUES('${name}');`;

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  })
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

const listItems = (req, res) => {
  const query = `SELECT * FROM inventory;`;

  db.query(query, (err, { rows }) => {
    if (err) {
      res.send(404);
    } else {
      res.status(200).send(rows);
    }
  })
}


module.exports = {
  createItem,
  updateItem,
  deleteItem,
  listItems,
}