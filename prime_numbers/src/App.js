import React, { useState } from 'react'

import './App.css';

function App() {
  const [start, setStart] = useState();
  const [end, setEnd] = useState();

  const PrimeNumbers = () => {
       // program to check if a number is prime or not
       let primeNumber=[]
       let number 
       for (let i = start; i < end; i++) { 
           number = i
           let checkNumber = true;
           // check if number is equal to 1
           if (number > 1) {
               // looping through 2 to number-1
               for (let i = 2; i < number; i++) {
                   if (number % i == 0) {
                        checkNumber = false;
                       break;
                   }
               }
               if (checkNumber) {
                 primeNumber.push(number)
               }
           }
       }
       return primeNumber;
   
  }
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Start With" onChange={(x)=>setStart(x.target.value)} />
        <input type="text" placeholder="End With" onChange={(x)=>setEnd(x.target.value)} />
        <br />
        <PrimeNumbers />
      </form>
    </div>
  );
}

export default App;
