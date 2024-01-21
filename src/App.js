import React, { useState } from 'react';
import data from './data';
import './App.css'
import Tours from './components/Tours';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
   const newTours = tours.filter((item)=> (id !== item.id))
    setTours(newTours)
  
  }

  if(tours.length === 0){
    return (
      <div>
        <h2>No Tours Left</h2>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
