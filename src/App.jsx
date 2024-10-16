import { useState, useEffect } from 'react';
import './App.css'
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [list, setList] = useState(null);

  const fetchAllCoinData = async () => {
    const response = await fetch(`https://min-api.cryptocompare.com/data/all/coinlist?&api_key${API_KEY}`);
    const data = await response.json()
    setList(data)
  }

  useEffect(() => { 
    fetchAllCoinData()
    fetchAllCoinData().catch(console.error)
  }, []);

  console.log(list)
  return (
    <div className='whole-page'>
      <h1>Crypto List</h1>
      <ul>
        {list && Object.entries(list.Data).map(([coin]) => {
           list.Data[coin].PlatformType === "blockchain" ? ( 
            <li key={list.Data[coin].FullName}>
              {list.Data[coin].FullName}
            </li>
           ): null
        } ) }
      </ul>
    </div>
  )
}

export default App
