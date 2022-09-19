import React, { useState } from 'react'

import './App.css';

function App() {
  const [name, setName] = useState();

  const SearchFilter = () => {
    let array = ['arsalan', 'usman', 'noman', 'faizan']
    if(name.length > 2){
        let filter = array.filter((itm)=> !itm.indexOf(name))
        return filter
    }
    return array
  }
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name" onChange={(x)=>setName(x.target.value)} />
        <br />
        <SearchFilter />
      </form>
    </div>
  );
}

export default App;
