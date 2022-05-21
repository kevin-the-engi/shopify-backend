const controllers = require('../controllers');
const express = require('express'); 
const router = express.Router()

router.get('/list', controllers.listItems);

router.post('/create-item', controllers.createItem);

router.put('/edit-item', controllers.updateItem);

router.delete('/delete-item', controllers.deleteItem);

router.post('/create-warehouse', controllers.createWarehouse);

router.get('/warehouses', controllers.listWarehouses);

router.put('/select-warehouse', controllers.setWarehouse);

module.exports = {
  router
}