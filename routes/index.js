const controllers = require('../controllers');
const express = require('express'); 
const router = express.Router()

router.get('/list', controllers.listItems);

router.post('/createItem', controllers.createItem);

router.put('/editItem', controllers.updateItem);

router.delete('/deleteItem', controllers.deleteItem);

module.exports = {
  router
}