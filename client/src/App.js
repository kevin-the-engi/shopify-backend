import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CreateButton from './components/CreateButton/CreateButton.jsx';
import ListInventory from './components/ListInventory/ListInventory.jsx';

function App() {
  const [data, setData] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getWarehouses();
    getData();
  }, []);
  
  const getData = () => {
    axios.get('/list')
      .then((res) => setData(res.data));
  }

  const createItem = (item) => {
    axios.post('/create-item', { name: item })
      .then((res) => setData(res.data));
  }

  const editItem = (item, id) => {
    axios.put('/edit-item', { id, name: item })
      .then((res) => setData(res.data));
  }

  const deleteItem = (id) => {
    axios.delete('/delete-item', { 
      data: { id } 
    })
      .then((res) => setData(res.data));
  }

  const getWarehouses = () => {
    axios.get('/warehouses')
      .then((res) => setWarehouses(res.data));
  }

  const createWarehouse = (name) => {
    axios.post('create-warehouse', { name })
      .then((res) => setWarehouses(res.data));
  }

  const selectWarehouse = (itemID, warehouseID) => {
    axios.put('select-warehouse', { itemID, warehouseID })
      .then((res) => setData(res.data));
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <div className="menu">
        <CreateButton 
          type="Create" 
          desc="Create item" 
          getName={createItem} 
        />
        <CreateButton 
          type="Location" 
          desc="Create location" 
          getName={createWarehouse} 
        />
      </div>

      <ListInventory 
        inventory={data} 
        warehouses={warehouses}
        selectIDs={selectWarehouse}
        getName={editItem} 
        deleteItem={deleteItem} 
      />
    </div>
  );
}

export default App;
