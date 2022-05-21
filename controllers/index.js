const db = require('../db')

const createItem = (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO inventory(name) VALUES('${name}');`;

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(409);
    } else {
      listItems(req, res, null, 201)
    }
  })
}

const updateItem = (req, res) => {
  const { id, name } = req.body;
  const query = `
    UPDATE inventory
    SET name = '${name}'
    WHERE id = ${id};
  `;
  db.query(query, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      listItems(req, res, null, 201);
    }
  })
}

const deleteItem = (req, res) => {
  const { id } = req.body;
  const query = `DELETE FROM inventory WHERE id = ${id};`

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(404);
    } else {
      listItems(req, res);
    }
  })
}

const listItems = (req, res, next, code = 200) => {
  const query = `    
    SELECT 
      inventory.id, 
      inventory.name, 
      warehouses.name AS warehouse
    FROM inventory
    LEFT JOIN warehouses 
    ON inventory.warehouse_id = warehouses.id 
    ORDER by inventory.id;
  `;

  db.query(query, (err, { rows }) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(code).send(rows);
    }
  })
}

const createWarehouse = (req, res) => {
  const { name } = req.body;
  const query = `INSERT INTO warehouses(name) VALUES('${name}');`

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(409);
    } else {
      listWarehouses(req, res, null, 201); 
    }
  })
}

const listWarehouses = (req, res, next, code = 200) => {
  const query = `SELECT * FROM warehouses ORDER BY id;`;

  db.query(query, (err, { rows }) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(code).send(rows);
    }
  })
}

const setWarehouse = (req, res) => {
  const { itemID, warehouseID } = req.body;
  const query = `
    UPDATE inventory
    SET warehouse_id = '${warehouseID}'
    WHERE id = ${itemID};
  `;

  db.query(query, (err) => {
    if (err) {
      res.sendStatus(400);
    } else {
      listItems(req, res, null, 201);
    }
  })
}

module.exports = {
  createItem,
  updateItem,
  deleteItem,
  listItems,
  createWarehouse,
  listWarehouses,
  setWarehouse,
}