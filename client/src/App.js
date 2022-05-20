import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import CreateButton from './components/CreateButton/CreateButton.jsx';
import ListInventory from './components/ListInventory/ListInventory.jsx';

function App() {
  const [data, setData] = useState([]);
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    getData();
    getWarehouses();
  }, []);
  
  const getData = () => {
    axios.get('/list')
      .then((res) => res.data)
      .then((data) => setData(data));
  }

  const postItem = (item) => {
    axios.post('/create-item', { name: item })
      .then((res) => res.data)
      .then((data) => setData(data));
  }

  const editItem = (item, id) => {
    axios.put('/edit-item', { id, name: item })
      .then((res) => res.data)
      .then((data) => setData(data));
  }

  const deleteItem = (id) => {
    axios.delete('/delete-item', { 
      data: { id } 
    })
      .then((res) => res.data)
      .then((data) => setData(data));  
  }

  const getWarehouses = () => {
    axios.get('/warehouses')
      .then((res) => res.data)
      .then((data) => setWarehouses(data));
  }

  const postWarehouse = (name) => {
    console.log(name)
  }

  return (
    <div className="App">
      <header 
        className="App-header">
      </header>

      <div className="menu">
        <CreateButton type="Create" desc="Create item" getName={postItem} />
        <CreateButton type="Location" desc="Create location" getName={postWarehouse} />
      </div>

      <ListInventory 
        inventory={data} 
        getItem={editItem} 
        deleteItem={deleteItem} 
      />
    </div>
  );
}

export default App;
