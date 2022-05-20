const db = require('../db')

const createItem = (req, res, next) => {
  const { name } = req.body;
  const query = `INSERT INTO inventory(name) VALUES('${name}');`;

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(409);
    } else {
      listItems(req, res, next, 201)
    }
  })
}

const updateItem = (req, res, next) => {
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
      listItems(req, res, next, 201);
    }
  })
}

const deleteItem = (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM inventory WHERE id=${id};`

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      listItems(req, res);
    }
  })
}

const listItems = (req, res, next, code = 200) => {
  const query = `SELECT * FROM inventory ORDER BY id;`;

  db.query(query, (err, { rows }) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(code).send(rows);
    }
  })
}

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  listItems,
}