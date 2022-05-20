import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import ItemButton from './components/ItemButton/ItemButton.jsx';
import ListInventory from './components/ListInventory/ListInventory.jsx';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
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

  return (
    <div className="App">
      <header 
        className="App-header">
      </header>

      <div className="menu">
        <ItemButton type="Create" getItem={postItem} />
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
