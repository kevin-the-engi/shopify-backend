import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);
  
  const getData = () => {
    axios.get('/api')
      .then((res) => res.data)
      .then((data) => setData(data.message));
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>

      
    </div>
  );
}

export default App;
