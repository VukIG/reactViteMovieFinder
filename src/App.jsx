import { useEffect, useState } from 'react'
import SearchIcon from './assets/search.svg'

const API_URL='http://www.omdbapi.com?apikey=71487580';

function App() {
  
  const [movies,setMovies] = useState('');
  const [searchTerm,setSearchTerm] = useState([]);

  const searchMovies = async (name) => {
    const response = await fetch(`${API_URL}&s=${name}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(()=>{
    searchMovies('batman');
  },[]);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input type="text"

          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value);
          }}
        />
        <img src={SearchIcon} onClick={()=>{}} />
      </div>
      <div className="container">
        
      </div>
    </div>
  )
}

export default App