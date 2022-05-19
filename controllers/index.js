const db = require('../db')

const createItem = (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO inventory(name) VALUES('${name}');`;

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(409);
    } else {
      res.sendStatus(201);
    }
  })
}

const updateItem = (req, res) => {
  const { id, name } = req.body;
  const query = `
    UPDATE inventory
    SET name = '${name}'
    WHERE id = ${id};
  `

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  })
}

const deleteItem = (req, res) => {
  const { id } = req.body;
}

const listItems = (req, res) => {
  const query = `SELECT * FROM inventory ORDER BY id;`;

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