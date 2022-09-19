import React, { useState } from 'react'

import './App.css';

function App() {
  const [name, setName] = useState();

  const ReversWords = () => {
    if(name){
      let array = name.split(' ')
      let wordReverse = array.map((word)=>
        word.split('').reverse().join('')
      )    
      let joinWords = wordReverse.join(' ')
      return joinWords;
    }else{
      return 'Write sentences.'
    }
  }
  
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Name" onChange={(x)=>setName(x.target.value)} />
        <br />
        <ReversWords />
      </form>
    </div>
  );
}

export default App;
