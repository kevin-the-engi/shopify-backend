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
      .then((data) => setData(data))
  }

  return (
    <div className="App">
      <header 
        className="App-header">
      </header>

      <ItemButton type="Create" />
      <ListInventory inventory={data} />
    </div>
  );
}

export default App;
