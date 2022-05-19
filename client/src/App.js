import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Buttons from './components/Buttons/Buttons.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    axios.get('/list')
      .then((res) => res.data)
      .then((data) => setData(data.message))
  }

  return (
    <div className="App">
      <header 
        className="App-header">
      </header>

      <Buttons name="Create" />
      
    </div>
  );
}

export default App;
